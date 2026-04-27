/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly SMTP_HOST: string;
  readonly SMTP_PORT: string;
  readonly SMTP_SECURE: string;
  readonly SMTP_USER: string;
  readonly SMTP_PASS: string;
  readonly TURNSTILE_SECRET_KEY: string;
  readonly PUBLIC_TURNSTILE_SITE_KEY: string;
  readonly CONTACT_TO_EMAIL: string;
  readonly PUBLIC_CAL_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
