import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

/**
 * Werkstatt / Lab entries.
 *
 * Layout is `werkstatt/<locale>/<slug>.md`. A dotted `<slug>.<locale>.md`
 * scheme was tried first and silently lost half the entries: the glob loader
 * derives its id from the filename, and the two locale variants collapsed
 * onto the same id, so whichever loaded second won. Directories keep the ids
 * distinct.
 *
 * Both locales must exist before an entry ships (bfn-wiki decision
 * 2026-08-07) — a half-translated Lab reads worse than a small one. Nothing
 * enforces that automatically, so check the pair when adding an entry.
 *
 * Security constraint: roles, architecture and reasoning are publishable.
 * Hostnames, node names, IP addresses, ports and network topology are not.
 */
const werkstatt = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/werkstatt' }),
  schema: z.object({
    title: z.string(),
    /** One sentence. Shown on the index, in meta description, in link previews. */
    summary: z.string(),
    locale: z.enum(['de', 'en']),
    /**
     * Shared across the locale pair, and the URL segment for both routes.
     * Deliberately NOT called `slug`: the glob loader treats a frontmatter
     * `slug` as an id override, which collapses the two locale files back
     * onto one entry and silently drops half the content.
     */
    key: z.string(),
    date: z.coerce.date(),
    /** Mono metadatum on the entry header, e.g. "Homelab" or "Agenten". */
    topic: z.string(),
    /** Keeps an entry out of the index without deleting the file. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { werkstatt };
