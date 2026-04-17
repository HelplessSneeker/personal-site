export interface SocialLink {
  id: string;
  label: string;
  url: string;
  isPlaceholder?: boolean;
}

// TODO: Benjamin — replace placeholder handles with actual URLs before launch
export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/benjamin-noessler',
    isPlaceholder: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/benjamin-noessler',
    isPlaceholder: true,
  },
];
