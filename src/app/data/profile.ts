export interface SocialLink {
  label: string;
  href: string;
  icon: 'linkedin' | 'github' | 'mail' | 'phone';
  external?: boolean;
}

export interface EducationEntry {
  degree: string;
  school: string;
  period: string;
}

export const profile = {
  name: 'Ayesha Zargham',
  title: 'Senior Full-Stack Engineer | Frontend Architecture Specialist',
  experienceYears: '6+',
  location: 'Lahore, Pakistan',
  remote: 'Open to Remote Roles',
  email: 'ayeshazargham19@gmail.com',
  phone: '0321 7764204',
  phoneHref: 'tel:03217764204',
  linkedin: 'https://www.linkedin.com/in/ayesha-zargham/',
  github: 'https://github.com/dev-ayeshazee',
  resumeUrl: 'Ayesha_Zargham_Resume.pdf',
  headline: 'Senior Full-Stack Engineer',
  tagline:
    'Architecting enterprise-grade Angular & React applications, backed by high-throughput Node.js APIs and scalable frontend systems.',
  summary:
    '6+ years architecting high-throughput Node.js APIs and scalable enterprise frontend systems across Angular and React, with a proven track record directing complex enterprise migrations and designing high-concurrency database models (MongoDB, PostgreSQL, Redis). Expert in reactive state management, real-time event streaming, and delivering resilient, distributed web architectures — with measurable wins along the way, including a 25% cut in web-vitals latency.',
} as const;

export const educations: EducationEntry[] = [
  { degree: 'BS Computer Science', school: 'FAST NUCES, Lahore', period: '2015 – 2019' },
  { degree: 'ICS', school: 'Kinnaird College for Women, Lahore', period: '2013 – 2015' },
];

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin', external: true },
  { label: 'GitHub', href: profile.github, icon: 'github', external: true },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
  { label: 'Call', href: profile.phoneHref, icon: 'phone' },
];
