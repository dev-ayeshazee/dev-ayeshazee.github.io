export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Independent Engineer, Lead Full-Stack Consultant',
    company: 'Freelancing (Part Time)',
    period: '04/2026 – Present',
    location: 'Remote',
    points: [
      'Architected a unified multi-platform ecosystem across React, Angular, and Node.js microservices, powering 3+ high-traffic client platforms handling 50k+ daily active users from a single modular architecture.',
      'Optimized and indexed multi-tenant MongoDB schemas, reducing p95 query latency by 35% and achieving real-time data synchronization between distributed frontends and backend services.',
      'Boosted platform stability to 99.9% uptime by authoring an automated testing suite (unit, integration, and E2E) that captured complex asynchronous edge cases before production release.',
    ],
    tags: ['React', 'Angular', 'Node.js', 'MongoDB', 'Microservices'],
  },
  {
    role: 'Senior Frontend Engineer',
    company: 'Websays',
    period: '04/2024 – 03/2026',
    location: 'Long-term Fractional',
    points: [
      'Slashed initial application bundle size and decreased initial load time by 25% by migrating legacy modules to lazy-loaded standalone components and optimizing DOM rendering passes.',
      'Built high-throughput data visualization dashboards streaming across 150+ metrics, maintaining 60 FPS UI performance during high-volume social monitoring spikes.',
      'Reduced server polling overhead and API round-trips by 40% by engineering low-latency WebSocket alerting pipelines and an in-memory RxJS caching layer.',
    ],
    tags: ['Angular', 'RxJS', 'WebSockets', 'Standalone Components'],
  },
  {
    role: 'Lead Angular Engineer',
    company: 'Devstudio International',
    period: '09/2024 – 12/2024',
    location: 'Short-Term Contract',
    points: [
      'Spearheaded the complete platform migration of Hoopiz from Angular 12 to 18, eliminating technical debt across 100+ components with zero downtime or regressions.',
      'Replaced complex, legacy state machinery with Angular Signals, resolving 40+ critical client-reported risk blockers and cutting state-related calculation latency.',
      'Redesigned high-density financial ledgers (credit exposure, aging balance tables), boosting module rendering speed by 20% and improving user task completion rates by 15%.',
    ],
    tags: ['Angular', 'Signals', 'Credit Management', 'Risk Assessment'],
  },
  {
    role: 'Angular & Full-Stack Developer',
    company: 'IdeaToLife',
    period: '09/2021 – 03/2024',
    location: 'Remote',
    points: [
      'Delivered client-side architecture across 5+ enterprise platforms, maintaining a 100% on-time milestone delivery record across continuous two-week Agile sprints.',
      'Engineered reusable UI design systems and state-driven RBAC authentication libraries, reducing frontend feature delivery time by 30% across engineering teams.',
      'Cut client-reported UI defects by 25% by enforcing strict TypeScript boundaries, cross-browser compatibility checks, and WCAG accessibility standards.',
    ],
    tags: ['Angular', 'RBAC', 'Accessibility', 'Agile'],
  },
  {
    role: 'Frontend Developer',
    company: 'Aquila Techs',
    period: '07/2021 – 02/2022',
    location: 'Part-Time Engagement',
    points: [
      'Demonstrated proficiency in a diverse tech stack, encompassing HTML, CSS, and JavaScript, to create visually appealing and highly functional user interfaces on their meal prep app.',
      'Led the development of dynamic and feature-rich web applications using the Angular framework.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Angular'],
  },
  {
    role: 'MEAN Stack Developer',
    company: 'Numtra AI',
    period: '01/2020 – 08/2021',
    location: 'Onsite',
    points: [
      'Engineered the interactive drag-and-drop canvas for a visual AutoML platform, enabling non-technical users to build end-to-end ML training pipelines 3x faster.',
      'Designed high-performance Node.js/Express APIs and MongoDB schemas, reducing model telemetry ingestion latency by 25% during live training evaluation runs.',
      'Integrated downstream data pipelines with MLFlow and Apache Airflow, automating model metric logging across 10+ machine learning workflows.',
    ],
    tags: ['MEAN Stack', 'Node.js', 'MongoDB', 'AutoML', 'MLFlow'],
  },
];
