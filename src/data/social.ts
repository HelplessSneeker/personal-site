export interface SocialLink {
  id: string;
  label: string;
  url: string;
  isPlaceholder?: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/HelplessSneeker',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bf-noessler/',
  },
];
