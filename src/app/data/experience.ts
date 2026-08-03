export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  type: 'work' | 'break';
  points: string[];
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Senior Frontend Developer',
    company: 'Websays (Contract / Freelance)',
    period: '02/2025 – 05/2025',
    type: 'work',
    points: [
      'Translated designs into responsive Angular interfaces with reusable components for the new web app launch.',
      'Led the migration of the Websays application from Angular 8 to Angular 18, ensuring performance improvements and UI consistency.',
    ],
    tags: ['Angular', 'Migration', 'Component Design'],
  },
  {
    role: 'Career Break',
    company: 'Family Priorities',
    period: '06/2025 – 09/2025',
    type: 'break',
    points: [],
    tags: [],
  },
  {
    role: 'Career Break',
    company: 'Maternity',
    period: '12/2024 – 01/2025',
    type: 'break',
    points: [],
    tags: [],
  },
  {
    role: 'Senior Angular Developer',
    company: 'Devstudio International (Remote)',
    period: '09/2024 – 11/2024',
    type: 'work',
    points: [
      'Led the migration of the Hoopiz platform from Angular 12 to 18.',
      'Debugged and enhanced key credit management and risk management modules; redesigned platform UI screens.',
    ],
    tags: ['Angular', 'Migration', 'Risk Management'],
  },
  {
    role: 'Senior Frontend Developer',
    company: 'Websays (Hybrid)',
    period: '04/2024 – 08/2024',
    type: 'work',
    points: ['Managed Websays Dashboard frontend, built admin portal features, and optimized load times.'],
    tags: ['Angular', 'Dashboard', 'Performance'],
  },
  {
    role: 'Angular Developer',
    company: 'IdeaToLife (Remote)',
    period: '09/2021 – 03/2024',
    type: 'work',
    points: ['Developed client-side web applications using Angular across 5+ enterprise projects.'],
    tags: ['Angular', 'Enterprise'],
  },
  {
    role: 'Frontend Developer',
    company: 'Aquila Techs (Part Time / Freelance)',
    period: '07/2021 – 02/2022',
    type: 'work',
    points: ['Built feature-rich user interfaces and dynamic web apps for a meal prep application.'],
    tags: ['Angular', 'UI/UX'],
  },
  {
    role: 'MEAN Stack Developer',
    company: 'Nexus AI (Onsite)',
    period: '01/2020 – 08/2021',
    type: 'work',
    points: ['Designed AI components, integrated MLFlow/Airflow/Hadoop APIs, and built Node.js backend endpoints.'],
    tags: ['MongoDB', 'Express', 'Angular', 'Node.js', 'MLFlow', 'Airflow'],
  },
];
