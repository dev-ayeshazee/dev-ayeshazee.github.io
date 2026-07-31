export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  points: string[];
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Senior Fullstack Developer',
    company: 'Freelance / Part-Time',
    period: '04/2026 – Present',
    current: true,
    points: [
      'Architected multi-platform ecosystems combining Angular, React, and Node.js APIs.',
      'Built geospatial tracking modules and optimized MongoDB database queries for scale.',
    ],
    tags: ['Angular', 'React', 'Node.js', 'MongoDB', 'Geospatial'],
  },
  {
    role: 'Senior Frontend Developer',
    company: 'Websays',
    period: '04/2024 – 03/2026',
    points: [
      'Implemented complex RxJS data flows powering real-time dashboards.',
      'Delivered pixel-perfect Figma-to-code translation with a strong focus on UX detail.',
      'Drove performance tuning initiatives resulting in 25% faster load speeds.',
    ],
    tags: ['Angular', 'RxJS', 'Figma', 'Performance'],
  },
  {
    role: 'Senior Angular Developer',
    company: 'Devstudio International',
    period: '09/2024 – 12/2024',
    points: [
      'Resolved critical workflows for risk assessment modules used by enterprise clients.',
      'Boosted task completion rates by 15% through targeted UX and workflow improvements.',
    ],
    tags: ['Angular', 'Risk Modules', 'UX'],
  },
  {
    role: 'Angular Developer',
    company: 'IdeaToLife',
    period: '09/2021 – 03/2024',
    points: [
      'Delivered client applications across 5+ enterprise projects using Agile methodologies.',
      'Collaborated cross-functionally with design and backend teams to ship production features.',
    ],
    tags: ['Angular', 'Agile', 'Enterprise'],
  },
  {
    role: 'MEAN Stack Developer',
    company: 'Nexus AI',
    period: '01/2020 – 08/2021',
    points: [
      'Integrated AI platform APIs (MLFlow, Apache Airflow, Hadoop) into modern frontends.',
      'Built and maintained full-stack features across the MEAN stack.',
    ],
    tags: ['MongoDB', 'Express', 'Angular', 'Node.js', 'MLFlow', 'Airflow'],
  },
];
