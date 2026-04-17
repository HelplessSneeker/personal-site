export interface ExperienceEntry {
  company: string;
  roleDe: string;
  roleEn: string;
  from: string;
  to: string | 'present';
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Wien Digital',
    roleDe: 'Technischer Berater',
    roleEn: 'Technical Advisor',
    from: '2025',
    to: 'present',
  },
  {
    company: 'Labuniq',
    roleDe: 'Fullstack Developer',
    roleEn: 'Fullstack Developer',
    from: '2024',
    to: '2025',
  },
  {
    company: 'Carintech',
    roleDe: 'Fullstack Developer',
    roleEn: 'Fullstack Developer',
    from: '2023',
    to: '2024',
  },
  {
    company: 'Amiblu',
    roleDe: 'Junior Software Developer',
    roleEn: 'Junior Software Developer',
    from: '2022',
    to: '2023',
  },
  {
    company: 'Anexia',
    roleDe: 'Junior Software Developer',
    roleEn: 'Junior Software Developer',
    from: '2021',
    to: '2022',
  },
];
