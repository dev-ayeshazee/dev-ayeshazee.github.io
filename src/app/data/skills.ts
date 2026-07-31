export interface SkillGroup {
  key: string;
  label: string;
  icon: 'layout-panel-left' | 'server' | 'cloud';
  description: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    key: 'frontend',
    label: 'Frontend Architecture',
    icon: 'layout-panel-left',
    description: 'Building scalable, reactive UIs with modern component architecture.',
    skills: ['Angular (Signals, RxJS, NgRx)', 'React', 'TypeScript', 'Tailwind CSS', 'Responsive UI Design'],
  },
  {
    key: 'backend',
    label: 'Backend & Databases',
    icon: 'server',
    description: 'Designing robust APIs and data layers that scale with product needs.',
    skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'SQLite', 'Prisma', 'Redis'],
  },
  {
    key: 'tools',
    label: 'Tools & Cloud',
    icon: 'cloud',
    description: 'Shipping reliably with modern DevOps, cloud, and collaboration tooling.',
    skills: ['Docker', 'GCP', 'AWS S3', 'Git', 'Jira', 'Agile/Scrum'],
  },
];
