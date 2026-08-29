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
  title: 'Senior Frontend & Full-Stack Developer',
  experienceYears: '6+',
  location: 'Lahore, Pakistan',
  remote: 'Open to Remote Roles',
  email: 'ayeshazargham19@gmail.com',
  phone: '0321 7764204',
  phoneHref: 'tel:03217764204',
  linkedin: 'https://www.linkedin.com/in/ayesha-zargham/',
  github: 'https://github.com/dev-ayeshazee',
  headline: 'Senior Full-Stack Engineer Specializing in Scalable Frontend Architecture & Node.js Ecosystems.',
  tagline: '6+ years of crafting high-performance Angular apps, robust APIs, and modern web experiences.',
  summary:
    'Senior Frontend & Full-Stack Developer with 6+ years architecting scalable Angular and React applications backed by robust Node.js and MEAN-stack APIs. Proven track record across enterprise credit management, risk assessment, AI-integrated platforms, and e-commerce products — consistently improving performance, reducing load times, and shipping pixel-accurate, accessible interfaces. Comfortable owning delivery end-to-end, from Figma-to-code translation and frontend state architecture to database schema design and cross-team Agile delivery, for both enterprise clients and high-traffic global platforms.',
} as const;

export const educations: EducationEntry[] = [
  { degree: 'BS Computer Science', school: 'FAST NUCES, Lahore', period: '2015 – 2019' },
  { degree: 'ICS', school: 'Kinnaird College for Women, Lahore', period: '2013 – 2015' },
];

export const certifications: string[] = [
  'Become a MEAN JavaScript Developer — LinkedIn Learning',
  'Building Angular and Node Apps with Authentication — LinkedIn Learning',
  'Building RESTful APIs with Node.js and Express — LinkedIn Learning',
  'Angular Essential Training — LinkedIn Learning',
];

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin', external: true },
  { label: 'GitHub', href: profile.github, icon: 'github', external: true },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
  { label: 'Call', href: profile.phoneHref, icon: 'phone' },
];
