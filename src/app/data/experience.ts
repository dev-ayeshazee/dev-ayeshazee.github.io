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
      'Designed and optimized MongoDB schemas for multi-platform ecosystems, improving query performance and ensuring seamless data synchronization between React/Angular frontends and Node.js backends.',
      'Architected and managed a multi-platform ecosystem comprising a React application, an Angular application, and a Node.js backend to support multiple high-traffic global websites.',
      'Transformed complex UI/UX designs from Figma into clean, functional, and highly responsive frontend code, ensuring seamless cross-browser compatibility and mobile responsiveness.',
      'Implemented robust frontend state management utilizing Redux, streamlining asynchronous data handling and ensuring predictable data flows across user interfaces.',
      'Enforced code reliability and high-performance metrics by writing comprehensive automated test cases for APIs, successfully handling complex asynchronous workflows and data streams.',
    ],
    tags: ['React', 'Angular', 'Node.js', 'MongoDB', 'Redux'],
  },
  {
    role: 'Senior Frontend Developer',
    company: 'Websays',
    period: '04/2024 – 03/2026',
    location: 'Contract (Freelance),Hybrid',
    points: [
      'Collaborated closely with designers to transform Figma designs into pixel-accurate, responsive interfaces while integrating complex REST APIs and optimizing frontend performance (reducing initial load times by 25%).',
      'Applied Angular best practices, including reusable component design, RxJS-driven data flows, and state management, to maintain a clean, maintainable codebase in fast-paced remote environments.',
    ],
    tags: ['Angular', 'RxJS', 'REST APIs', 'Performance'],
  },
  {
    role: 'Senior Angular Developer',
    company: 'Devstudio International',
    period: '09/2024 – 12/2024',
    location: 'Remote',
    points: [
      'Owned and resolved 40+ high-priority client issues by debugging complex Angular workflows, improving stability and reliability across credit management and risk assessment modules.',
      'Developed reusable components and scalable frontend architecture to resolve high-priority workflows, improving module performance by 20% and user task completion rates by 15%.',
    ],
    tags: ['Angular', 'Credit Management', 'Risk Assessment'],
  },
  {
    role: 'Angular Developer',
    company: 'IdeaToLife',
    period: '09/2021 – 03/2024',
    location: 'Hybrid',
    points: [
      'Delivered client-side applications for 5+ diverse projects, consistently meeting enterprise-level scalability requirements.',
      "Leveraged Angular's core features to create seamless user experiences, maintaining high-quality code standards across all deliverables.",
      'Participated in daily stand-ups, sprint planning, and retrospectives within an Agile framework to ensure 100% on-time delivery of enterprise project milestones.',
    ],
    tags: ['Angular', 'Agile', 'Enterprise'],
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
      'Designed and managed the frontend for AI-service platforms, integrating APIs from MLFlow, Apache Airflow, and Hadoop.',
      'Developed Node.js APIs for secure data fetching and storage, improving backend communication efficiency.',
    ],
    tags: ['MEAN Stack', 'Node.js', 'MLFlow', 'Airflow', 'Hadoop'],
  },
];
