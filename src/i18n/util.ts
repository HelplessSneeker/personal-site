import de from './de.json';
import en from './en.json';

export type Locale = 'de' | 'en';
export const DEFAULT_LOCALE: Locale = 'de';
export const LOCALES: readonly Locale[] = ['de', 'en'] as const;

type Dictionary = typeof de;

const dictionaries: Record<Locale, Dictionary> = { de, en: en as Dictionary };

export function getLocaleFromUrl(url: URL | string): Locale {
  const pathname = typeof url === 'string' ? url : url.pathname;
  return pathname.startsWith('/en/') || pathname === '/en' ? 'en' : 'de';
}

export function getDict(locale: Locale): Dictionary {
  return dictionaries[locale];
}

type PathsOf<T, Prefix extends string = ''> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? PathsOf<T[K], `${Prefix}${K}.`>
        : `${Prefix}${K}`;
    }[keyof T & string]
  : never;

export type TranslationKey = PathsOf<Dictionary>;

export function t(locale: Locale, key: TranslationKey): string {
  const value = resolve(dictionaries[locale], key);
  if (typeof value !== 'string') {
    if (import.meta.env.DEV) {
      console.warn(`[i18n] Missing or non-string translation for "${key}" in locale "${locale}"`);
    }
    return key;
  }
  return value;
}

export function tArray(locale: Locale, key: string): string[] {
  const value = resolve(dictionaries[locale], key);
  return Array.isArray(value) ? (value as string[]) : [];
}

function resolve(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, seg) => {
    if (acc && typeof acc === 'object' && seg in (acc as object)) {
      return (acc as Record<string, unknown>)[seg];
    }
    return undefined;
  }, obj);
}

/**
 * Returns the URL of the current page in the other locale.
 * /        -> /en/
 * /impressum -> /en/imprint
 * /en/     -> /
 */
export function getAltUrl(url: URL | string, currentLocale: Locale): string {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const targetLocale: Locale = currentLocale === 'de' ? 'en' : 'de';

  const routeMap: Record<string, string> = {
    '/': '/en/',
    '/impressum': '/en/imprint',
    '/impressum/': '/en/imprint',
    '/datenschutz': '/en/privacy',
    '/datenschutz/': '/en/privacy',
    '/en/': '/',
    '/en': '/',
    '/en/imprint': '/impressum',
    '/en/imprint/': '/impressum',
    '/en/privacy': '/datenschutz',
    '/en/privacy/': '/datenschutz',
  };

  if (routeMap[pathname]) return routeMap[pathname];

  if (targetLocale === 'en') {
    return `/en${pathname === '/' ? '/' : pathname}`;
  }
  return pathname.replace(/^\/en/, '') || '/';
}

export function getLocalizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'de') return clean;
  return clean === '/' ? '/en/' : `/en${clean}`;
}
