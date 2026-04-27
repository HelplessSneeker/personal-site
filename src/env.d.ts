/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly SMTP_HOST: string;
  readonly SMTP_PORT: string;
  readonly SMTP_SECURE: string;
  readonly SMTP_USER: string;
  readonly SMTP_PASS: string;
  readonly CONTACT_TO_EMAIL: string;
  readonly PUBLIC_CAL_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
