export interface SkillGroup {
  key: string;
  label: string;
  icon: 'layers' | 'share-2' | 'cloud' | 'database' | 'wrench' | 'users';
  description: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    key: 'frontend',
    label: 'Frontend Development',
    icon: 'layers',
    description: 'Core frameworks and languages used to build and ship production user interfaces.',
    skills: [
      'Angular (v2–18)',
      'React',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Sass',
      'Bootstrap',
      'Tailwind CSS',
      'PrimeNG',
      'Kendo UI',
    ],
  },
  {
    key: 'architecture',
    label: 'Architecture & Patterns',
    icon: 'share-2',
    description: 'Structuring large, maintainable applications with predictable state and data flow.',
    skills: [
      'Component-Driven Design',
      'State Management (NgRx / RxJS / Redux basics)',
      'Lazy Loading',
      'Responsive Design',
      'Cross-Browser Compatibility',
      'Micro Frontends (basic understanding)',
    ],
  },
  {
    key: 'cloud-data',
    label: 'Cloud & Big Data',
    icon: 'cloud',
    description: 'Cloud infrastructure and big-data platforms integrated into AI-driven products.',
    skills: [
      'Google Cloud Platform (GCP)',
      'Microsoft Azure',
      'AWS S3 (storage & containers)',
      'Hadoop (basics)',
      'Apache Airflow',
      'MLflow',
    ],
  },
  {
    key: 'backend',
    label: 'Backend & Databases',
    icon: 'database',
    description: 'Server-side APIs, authentication, and data persistence.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Authentication (JWT)', 'Basic familiarity with PostgreSQL'],
  },
  {
    key: 'tools-workflow',
    label: 'Tools & Workflow',
    icon: 'wrench',
    description: 'Day-to-day delivery, collaboration, and debugging tooling.',
    skills: [
      'Git (GitHub / GitLab / Bitbucket)',
      'Docker (basic)',
      'Agile/Scrum',
      'Jira',
      'Trello',
      'Figma',
      'Postman',
      'VS Code',
      'Chrome DevTools',
      'AI-Assisted Debugging & Research (ChatGPT, etc.)',
    ],
  },
  {
    key: 'soft-skills',
    label: 'Soft Skills',
    icon: 'users',
    description: 'Collaboration and communication skills that support delivery across distributed teams.',
    skills: ['Problem Solving', 'Team Collaboration', 'Client Communication', 'Mentorship', 'Remote Work Adaptability'],
  },
];
