import type { APIRoute } from 'astro';
import { z } from 'zod';
import nodemailer, { type Transporter } from 'nodemailer';
import { getDict } from '../../i18n/util';

export const prerender = false;

const contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.email().trim().max(320),
  message: z.string().trim().min(20).max(5000),
  projectType: z.enum(['landing', 'fullstack', 'other']),
  locale: z.enum(['de', 'en']).default('de'),
  // Honeypot: real users won't see or fill this field. Bots that
  // blindly populate every input get caught here.
  company: z.string().max(0).optional(),
});

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();
const RATE_LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000;

function clientIp(request: Request, clientAddress?: string): string {
  const fwd = request.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  const real = request.headers.get('x-real-ip');
  if (real) return real.trim();
  return clientAddress ?? 'unknown';
}

function rateLimit(ip: string): { ok: boolean; retryAfterSec: number } {
  const now = Date.now();
  const bucket = buckets.get(ip);
  if (!bucket || bucket.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, retryAfterSec: 0 };
  }
  if (bucket.count >= RATE_LIMIT) {
    return { ok: false, retryAfterSec: Math.ceil((bucket.resetAt - now) / 1000) };
  }
  bucket.count += 1;
  return { ok: true, retryAfterSec: 0 };
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildEmailBody(payload: z.infer<typeof contactSchema>): { text: string; html: string } {
  const labels = getDict(payload.locale).email.labels;

  const text = [
    `${labels.name}: ${payload.name}`,
    `${labels.email}: ${payload.email}`,
    `${labels.projectType}: ${payload.projectType}`,
    '',
    payload.message,
  ].filter(Boolean).join('\n');

  const html = `
    <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 640px;">
      <p><strong>${labels.name}:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>${labels.email}:</strong> <a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></p>
      <p><strong>${labels.projectType}:</strong> ${escapeHtml(payload.projectType)}</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />
      <p style="white-space: pre-wrap;">${escapeHtml(payload.message)}</p>
    </div>
  `.trim();

  return { text, html };
}

let cachedTransporter: Transporter | null = null;
function getTransporter(): Transporter | null {
  if (cachedTransporter) return cachedTransporter;
  const host = import.meta.env.SMTP_HOST;
  const user = import.meta.env.SMTP_USER;
  const pass = import.meta.env.SMTP_PASS;
  if (!host || !user || !pass) return null;
  const port = Number(import.meta.env.SMTP_PORT) || 587;
  const secure = String(import.meta.env.SMTP_SECURE ?? '').toLowerCase() === 'true';
  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
  return cachedTransporter;
}

async function sendWithRetry(
  transporter: Transporter,
  mailOpts: Parameters<Transporter['sendMail']>[0],
  maxAttempts = 3,
): Promise<void> {
  let lastErr: unknown;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await transporter.sendMail(mailOpts);
      return;
    } catch (err) {
      lastErr = err;
      if (attempt < maxAttempts) {
        const delay = attempt === 1 ? 500 : 2000;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  throw lastErr;
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const ip = clientIp(request, clientAddress);

  const rl = rateLimit(ip);
  if (!rl.ok) {
    return new Response(JSON.stringify({ ok: false, error: 'rate_limited' }), {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'Retry-After': String(rl.retryAfterSec),
      },
    });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'invalid_json' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return new Response(JSON.stringify({ ok: false, error: 'invalid_input', issues: parsed.error.issues }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const data = parsed.data;

  // Honeypot tripwire: if the hidden field has content, return a 200
  // so the bot believes it succeeded but skip sending the email.
  if (typeof (body as Record<string, unknown>)?.company === 'string' && (body as Record<string, string>).company.length > 0) {
    return new Response(JSON.stringify({ ok: true, honeypot: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const transporter = getTransporter();
  const toEmail = import.meta.env.CONTACT_TO_EMAIL || 'benjamin@noessler.at';
  const fromAddress = import.meta.env.SMTP_USER || toEmail;

  if (!transporter) {
    if (import.meta.env.DEV) {
      console.log('[contact] SMTP not configured — logging submission instead:');
      console.log({ name: data.name, email: data.email, projectType: data.projectType });
      console.log(data.message);
      return new Response(JSON.stringify({ ok: true, dev: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify({ ok: false, error: 'not_configured' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const emailDict = getDict(data.locale).email;
  const subject = `[noessler.at] ${emailDict.subjectPrefix} ${emailDict.subjectFrom} ${data.name}`;
  const { text, html } = buildEmailBody(data);

  try {
    await sendWithRetry(transporter, {
      from: `Benjamin Nößler Website <${fromAddress}>`,
      to: toEmail,
      replyTo: data.email,
      subject,
      text,
      html,
    });
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[contact] SMTP send failed after retries', err);
    return new Response(JSON.stringify({ ok: false, error: 'send_failed' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const GET: APIRoute = () =>
  new Response(JSON.stringify({ ok: false, error: 'method_not_allowed' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json', Allow: 'POST' },
  });
