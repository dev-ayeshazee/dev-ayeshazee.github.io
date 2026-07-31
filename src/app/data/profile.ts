export interface SocialLink {
  label: string;
  href: string;
  icon: 'linkedin' | 'github' | 'mail';
}

export const profile = {
  name: 'Ayesha Zargham',
  title: 'Senior Full-Stack / Angular Engineer',
  experienceYears: '6+',
  location: 'Lahore, Pakistan',
  remote: 'Open to Remote Roles',
  email: 'ayeshazargham19@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ayesha-zargham/',
  education: {
    degree: 'BS Computer Science',
    school: 'FAST NUCES, Lahore',
  },
  headline: 'Senior Full-Stack Engineer Specializing in Scalable Frontend Architecture & Node.js Ecosystems.',
  tagline: '6+ years of crafting high-performance Angular apps, robust APIs, and modern web experiences.',
} as const;

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
];
