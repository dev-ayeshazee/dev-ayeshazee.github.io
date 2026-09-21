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
    role: 'Senior Fullstack Developer',
    company: 'Freelancing (Part Time)',
    period: '04/2026 – Present',
    location: 'Remote',
    points: [
      'Architected a multi-platform ecosystem — a React app, an Angular app, and a shared Node.js backend — powering several high-traffic production sites from one codebase.',
      'Designed and indexed MongoDB schemas for multi-tenant access patterns, improving query performance and keeping React/Angular clients synchronized with the Node.js API in real time.',
      'Owned delivery end-to-end: translated Figma designs into responsive UI, managed state with Redux, and wrote automated API tests covering complex asynchronous workflows.',
    ],
    tags: ['React', 'Angular', 'Node.js', 'MongoDB', 'Redux'],
  },
  {
    role: 'Senior Frontend Developer',
    company: 'Websays',
    period: '04/2024 – 03/2026',
    location: 'Contract (Freelance),Hybrid',
    points: [
      'Built real-time, multi-channel data ingestion pipelines consuming social, blog, and forum sources, feeding dashboards with sub-second mention tracking.',
      'Delivered dynamic comparative benchmarking across 150+ data points, helping clients measure brand sentiment against competitors at a glance.',
      'Implemented low-latency alerting and geolocation sentiment mapping so clients could catch local conversation spikes and sentiment shifts as they happened.',
    ],
    tags: ['Angular', 'RxJS', 'Real-Time', 'Geolocation'],
  },
  {
    role: 'Senior Angular Developer',
    company: 'Devstudio International',
    period: '09/2024 – 12/2024',
    location: 'Remote',
    points: [
      "Directed the Hoopiz credit-management platform's migration from Angular 12 to 18, adopting standalone components and Angular Signals.",
      'Resolved 40+ high-priority legacy issues across credit and risk-assessment modules, stabilizing workflows the client team relied on daily.',
      'Re-architected core UI modules around the new standalone/Signals model, cutting load time by 25% and improving task-completion rates by 15%.',
    ],
    tags: ['Angular', 'Signals', 'Credit Management', 'Risk Assessment'],
  },
  {
    role: 'Angular Developer',
    company: 'IdeaToLife',
    period: '09/2021 – 03/2024',
    location: 'Hybrid',
    points: [
      'Built enterprise multi-tenant dashboards for 5+ clients, each with isolated data views driven by state-managed, role-based access control flows.',
      'Developed a modular Angular component library adhering to WCAG accessibility standards, becoming the standard building block across every project on the team.',
      'Participated in daily stand-ups, sprint planning, and retrospectives within an Agile framework to ensure 100% on-time delivery of enterprise milestones.',
    ],
    tags: ['Angular', 'RBAC', 'Accessibility', 'Agile'],
  },
  {
    role: 'Frontend Developer',
    company: 'Aquila Techs',
    period: '07/2021 – 02/2022',
    location: 'Part Time (Freelance)',
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
      'Built the interactive pipeline design canvas for a visual AutoML platform, letting users compose end-to-end data science workflows by hand.',
      'Developed model evaluation dashboards surfacing live training metrics and leaderboards, backed by Node.js/MongoDB APIs integrating MLFlow, Apache Airflow, and Hadoop.',
      'Designed secure data-fetching and storage endpoints that improved backend communication efficiency across the platform.',
    ],
    tags: ['MEAN Stack', 'Node.js', 'MongoDB', 'AutoML', 'MLFlow'],
  },
];
