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
      'Built real-time social listening features consuming high-volume WebSocket streams across social networks, blogs, and forums with sub-second UI updates.',
      'Implemented geolocation-based alerting and mapping so clients could track local conversation spikes and brand-sentiment shifts as they happened.',
      'Introduced RxJS-driven state caching and reusable component patterns, keeping dashboards and reporting views responsive under high data volume.',
    ],
    tags: ['Angular', 'RxJS', 'WebSockets', 'Geolocation'],
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
      'Delivered multi-tenant dashboards for 5+ enterprise clients, each with isolated data views and configurable role-based access control.',
      'Built a modular, reusable Angular component library that became the standard building block across every project on the team.',
      'Audited and remediated UI flows for WCAG accessibility compliance while maintaining 100% on-time delivery across Agile sprints.',
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
      'Built the drag-and-drop frontend for a visual AutoML pipeline builder, integrating APIs from MLFlow, Apache Airflow, and Hadoop.',
      'Developed Node.js/MongoDB APIs streaming real-time model-training metrics to the frontend, replacing slow polling with responsive live updates.',
      'Designed secure data-fetching and storage endpoints that improved backend communication efficiency across the platform.',
    ],
    tags: ['MEAN Stack', 'Node.js', 'MongoDB', 'AutoML', 'MLFlow'],
  },
];
