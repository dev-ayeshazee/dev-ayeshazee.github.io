export interface SkillGroup {
  key: string;
  label: string;
  icon: 'layers' | 'share-2' | 'cloud' | 'database' | 'wrench' | 'users';
  description: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    key: 'frontend-architecture',
    label: 'Frontend Architecture',
    icon: 'layers',
    description: 'Frameworks, state, and patterns for building large, maintainable UIs.',
    skills: [
      'Angular (v14–18, Standalone, Signals)',
      'React',
      'TypeScript',
      'Angular Signals',
      'RxJS',
      'NgRx',
      'Redux',
      'Tailwind CSS',
      'Micro-Frontends',
      'HTML5 / CSS3 / Sass',
      'PrimeNG / Kendo UI',
    ],
  },
  {
    key: 'backend-api',
    label: 'Backend & API Engineering',
    icon: 'share-2',
    description: 'Server-side services, real-time transport, and API design.',
    skills: ['Node.js', 'Express', 'RESTful APIs', 'WebSockets', 'JWT / Auth', 'Microservices Patterns'],
  },
  {
    key: 'databases',
    label: 'Databases & Data Modeling',
    icon: 'database',
    description: 'Schema design and persistence across relational and NoSQL stores.',
    skills: ['MongoDB', 'PostgreSQL', 'Azure Cosmos DB', 'Redis', 'Mongoose', 'Schema Optimization'],
  },
  {
    key: 'cloud-devops',
    label: 'Cloud & DevOps',
    icon: 'cloud',
    description: 'Cloud platforms, containers, and delivery pipelines.',
    skills: ['Google Cloud Platform (GCP)', 'Microsoft Azure', 'AWS S3 & Core Services', 'Docker', 'CI/CD Pipelines', 'Git'],
  },
  {
    key: 'architecture-practices',
    label: 'Architecture & Best Practices',
    icon: 'wrench',
    description: 'Systems-level judgment for scaling and evolving production platforms.',
    skills: [
      'Enterprise Framework Migrations',
      'Multi-Tenant SaaS',
      'Performance Tuning',
      'Lazy Loading',
      'Cross-Browser Compatibility',
      'Agile / Scrum',
    ],
  },
  {
    key: 'tools-workflow',
    label: 'Tools & Workflow',
    icon: 'wrench',
    description: 'Day-to-day delivery, collaboration, and debugging tooling.',
    skills: ['Jira', 'Trello', 'Figma', 'Postman', 'VS Code', 'Chrome DevTools'],
  },
  {
    key: 'soft-skills',
    label: 'Soft Skills',
    icon: 'users',
    description: 'Collaboration and communication skills that support delivery across distributed teams.',
    skills: ['Problem Solving', 'Team Collaboration', 'Client Communication', 'Mentorship', 'Remote Work Adaptability'],
  },
];

export const architectureSkillKeys = [
  'frontend-architecture',
  'backend-api',
  'databases',
  'cloud-devops',
  'architecture-practices',
];
