export type ProjectCategory = 'enterprise' | 'ecommerce' | 'ai';

export interface Project {
  name: string;
  category: ProjectCategory;
  description: string;
}

export interface CategoryFilter {
  key: 'all' | ProjectCategory;
  label: string;
}

export const projectCategories: CategoryFilter[] = [
  { key: 'all', label: 'All' },
  { key: 'enterprise', label: 'Enterprise / ERP' },
  { key: 'ecommerce', label: 'E-Commerce & Web Apps' },
  { key: 'ai', label: 'AI Platforms' },
];

export const categoryIcons: Record<ProjectCategory, string> = {
  enterprise: 'building-2',
  ecommerce: 'shopping-bag',
  ai: 'cpu',
};

export const projects: Project[] = [
  {
    name: 'Websays Social Listening Tool',
    category: 'enterprise',
    description: 'Managed & optimized the dashboard frontend; migrated from Angular 8 to 18.',
  },
  {
    name: 'Hoopiz Credit Management',
    category: 'enterprise',
    description: 'Migrated platform from Angular 12 to 18; redesigned risk management UI screens.',
  },
  {
    name: 'Senegal-DemDikk and GTSC',
    category: 'enterprise',
    description: 'Public bus e-ticketing and scheduling platform.',
  },
  {
    name: 'Thya Technology',
    category: 'ai',
    description: 'AI-driven platform for high-speed image processing UI workflows.',
  },
  {
    name: 'GoTrackr',
    category: 'enterprise',
    description: 'ERP management and task distribution dashboard.',
  },
  {
    name: 'MN ATELIER',
    category: 'ecommerce',
    description: 'E-commerce fashion website with responsive shopping UI.',
  },
  {
    name: 'Zone Healthy and Wholesome',
    category: 'ecommerce',
    description: 'Meal delivery and prep application.',
  },
  {
    name: 'Nexus AI',
    category: 'ai',
    description: 'AI service platform integrated with MLFlow, Apache Airflow, and Hadoop APIs.',
  },
];
