export type ProjectCategory = 'enterprise' | 'ecommerce' | 'ai' | 'personal';

export interface ProjectDetailPoint {
  title: string;
  description: string;
}

export interface Project {
  name: string;
  category: ProjectCategory;
  description: string;
  tags?: string[];
  image?: string;
  gallery?: string[];
  details?: ProjectDetailPoint[];
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
  { key: 'personal', label: 'Personal / Freelance' },
];

export const categoryIcons: Record<ProjectCategory, string> = {
  enterprise: 'building-2',
  ecommerce: 'shopping-bag',
  ai: 'cpu',
  personal: 'sparkles',
};

// Ordered by depth of detail: projects with screenshots first, then projects with
// written case-study detail but no screenshots yet, then bare-minimum entries.
export const projects: Project[] = [
  {
    name: 'Websays — Social Listening Platform',
    category: 'enterprise',
    description:
      'Multi-channel social listening platform with real-time mention tracking, analytics dashboards, and geolocation-based alerting.',
    tags: ['Angular', 'Real-Time', 'Data Visualization', 'Geolocation'],
    image: 'projects/websays/01.png',
    gallery: ['projects/websays/01.png', 'projects/websays/02.png', 'projects/websays/03.png'],
    details: [
      {
        title: 'Engineered Core Social Listening Modules',
        description:
          'Developed and maintained key features within the Websays suite, including multi-channel data ingestion pipelines and real-time mention tracking across social networks, blogs, and forums.',
      },
      {
        title: 'Architected Interactive Analytics & Reporting',
        description:
          'Built intuitive dashboards and automated reporting workflows supporting over 150 data points, dynamic comparative benchmarking, and sentiment analysis visualizations.',
      },
      {
        title: 'Implemented Real-Time Alerts & Geolocation',
        description:
          'Integrated low-latency alerting mechanisms and precise location-mapping features to help clients track brand sentiment shifts and local conversation spikes instantly.',
      },
    ],
  },
  {
    name: 'Hoopiz — Credit Management & Risk Intelligence Platform',
    category: 'enterprise',
    description:
      'Directed the Angular 12→18 migration and redesigned credit/risk management dashboards for a financial intelligence platform.',
    tags: ['Angular 18', 'Migration', 'Signals', 'Data Viz', 'Fintech'],
    image: 'projects/hoopiz/01.png',
    gallery: ['projects/hoopiz/01.png', 'projects/hoopiz/02.png', 'projects/hoopiz/03.png', 'projects/hoopiz/04.png'],
    details: [
      {
        title: 'Major Framework Migration (Angular 12 to 18)',
        description:
          'Directed the end-to-end upgrade of the core web platform, adopting modern Angular standalones, signals, and optimized dependency trees to drastically reduce bundle size and boost client-side rendering speed while preserving strict backward compatibility.',
      },
      {
        title: 'Risk & Credit Management Module Redesign',
        description:
          'Overhauled complex financial workflows, building dynamic dashboards for live credit exposure tracking (Encours client), credit limits (Limite crédit), aging balance distributions, and credit insurance coverage metrics (Cover).',
      },
      {
        title: 'Interactive Financial Data Visualizations',
        description:
          'Implemented rich visual analytics including payment delay trends (DPH), community vs. company payment scoring benchmarks, and customer portfolio risk distribution breakdowns using high-performance charting libraries.',
      },
      {
        title: 'Enterprise Table & Workflow Optimization',
        description:
          'Built high-density, multi-filtered data tables for accounts receivable tracking, ledger accounting (Mes écritures comptables), and automated alert management (Mes alertes), resolving critical user-reported bottlenecks across credit workflows.',
      },
    ],
  },
  {
    name: 'Numtra AI — Visual AutoML & Data Science Platform',
    category: 'ai',
    description:
      'Visual AutoML platform for building end-to-end data science pipelines, from feature engineering to model deployment.',
    tags: ['Angular', 'AutoML', 'Data Science', 'ML Ops'],
    image: 'projects/numtra/01.png',
    gallery: ['projects/numtra/01.png', 'projects/numtra/02.png', 'projects/numtra/03.png', 'projects/numtra/04.png'],
    details: [
      {
        title: 'Interactive Visual ML Pipeline Builder',
        description:
          'Engineered the core canvas for creating end-to-end data science workflows, connecting raw data sources (DBFS), automated transformations/feature engineering, and AutoML modeling blocks with configurable execution budgets and sampling strategies.',
      },
      {
        title: 'Feature Engineering & Statistical Exploration UI',
        description:
          'Developed high-performance feature grid interfaces displaying inline distribution histograms, statistical profiling metrics (Mean, Std Dev, Min/Max, Missing values), and one-click data transformation selectors over sampled datasets.',
      },
      {
        title: 'Multi-Project & ML Scenario Management Hub',
        description:
          'Built the project workspace catalog to create, filter, and organize domain-specific ML scenarios across Retail Credit Scoring, Churn Prediction, Fraud Detection, and Real Estate Valuation.',
      },
      {
        title: 'Comprehensive Model Evaluation & Diagnostics Suite',
        description:
          'Designed rich model evaluation dashboards rendering automated leaderboards (e.g., ExtraTreesClassifier ranking), classification metric gauges (Accuracy, F1-Score, Precision, Recall), interactive Confusion Matrices, and ROC curves.',
      },
      {
        title: 'Lifecycle Deployment & Staging Pipelines',
        description:
          'Implemented deployment management tabs enabling single-click promotion of trained models from staging to production environments with automated REST API endpoint provisioning.',
      },
    ],
  },
  {
    name: 'Zone Healthy — Health & Nutrition Meal Delivery Platform',
    category: 'ecommerce',
    description:
      'Full-stack meal subscription platform with dynamic customization, geo-based delivery, and loyalty rewards.',
    tags: ['Angular', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    image: 'projects/zonehealthy/01.png',
    gallery: [
      'projects/zonehealthy/01.png',
      'projects/zonehealthy/02.png',
      'projects/zonehealthy/03.png',
      'projects/zonehealthy/04.png',
    ],
    details: [
      {
        title: 'Full-Stack Subscription & Customization Engine',
        description:
          'Built dynamic end-to-end meal plan configuration flows using Angular and Node.js/Express, allowing users to select flexible meal frequencies (2–3 meals/day), customize delivery schedules, and set specific ingredient exclusions and dietary restrictions.',
      },
      {
        title: 'Geographic Availability & Dispatch Verification',
        description:
          'Implemented real-time ZIP-code validation APIs backed by MongoDB geo-queries, dynamically determining service zone eligibility and regional delivery fee tiers across Southern California.',
      },
      {
        title: 'Loyalty Points & Referral Wallet Architecture',
        description:
          'Designed and implemented full-stack rewards and referral microservices in Node.js/Express, managing user reward point accruals (1 pt / $1 spent), referral link generation, cash-back redemptions, and wallet balance deductions.',
      },
      {
        title: 'High-Performance Dietary Catalog & Filtering',
        description:
          'Developed responsive Angular client interfaces integrated with optimized MongoDB aggregation pipelines to efficiently filter rotating chef menus across diverse dietary programs (Keto, GLP-1 Balance, Healthy Nutrition, Gluten-Free).',
      },
      {
        title: 'Secure Authentication & Account Security',
        description:
          'Integrated robust JWT-based authentication pipelines, reCAPTCHA bot verification, password recovery workflows, and role-based access controls for seamless customer and subscription account management.',
      },
    ],
  },
  {
    name: 'Saylogix — Multi-Merchant Warehouse & Fulfillment Management System',
    category: 'enterprise',
    description:
      'Multi-merchant warehouse and fulfillment system spanning inbound, stock, and outbound operations with real-time analytics.',
    tags: ['Angular', 'WMS', 'Barcode Scanning', 'Multi-Tenant', 'i18n'],
    details: [
      {
        title: 'End-to-End Fulfillment Workflows',
        description:
          'Engineered core frontend modules across Inbound (receiving pipelines, ASN tracking, returns restock), Stock (multi-merchant SKU cataloging, bin locations, expiry tracking), and Outbound (Smart Wave picking, cart slot packing, carrier dispatch).',
      },
      {
        title: 'High-Efficiency Warehouse Operations UI',
        description:
          'Implemented high-density operational data tables with multi-criteria filtering, bulk actions, and integrated barcode scanning workflows designed for high-throughput warehouse processing and PDA-mode handheld devices.',
      },
      {
        title: 'Real-Time Operational Analytics',
        description:
          'Built live operational dashboards and visual reporting cards tracking replenishment status, order lifecycle stages (backorders, waves, packing, transit), and return diagnostics with multi-language (English & Arabic RTL/LTR) support.',
      },
      {
        title: 'Robust Multi-Tenant Data Architecture',
        description:
          'Structured state management and responsive data grids capable of managing diverse merchant product catalogs, dynamic weight/dimension specs, automated stock allocations, and SLA-driven order queues.',
      },
    ],
  },
  {
    name: 'AccuMax — Multi-Tenant AI Tax & Enterprise Management Platform',
    category: 'ai',
    description:
      'Multi-tenant AI tax platform with super-admin governance, database observability, and safe production scripting.',
    tags: ['Angular', 'Azure Cosmos DB', 'Multi-Tenant', 'AI', 'DevOps Tooling'],
    details: [
      {
        title: 'Multi-Tenant Administration & Governance',
        description:
          'Built the central super-admin management plane to oversee tenant onboarding, dynamic multi-year pricing tiers (storage quotas for Blob/DB), subscription licensing, and global tenant-wide announcement broadcasts.',
      },
      {
        title: 'Deep Database Observability & Cost Scoring',
        description:
          'Implemented rich telemetry dashboards tracking Azure Cosmos DB (MongoDB vCore) metrics, endpoint latency, cron execution health, and a heuristic "Top Offenders" query-cost scoring system ($lookup, $graphLookup, unbounded scans, DAL errors).',
      },
      {
        title: 'Production Maintenance & Safe Scripting Engine',
        description:
          'Engineered a production script runner with interactive "Dry Run" and "Execute" workflows, enabling safe bulk data backfills, inference scrub operations, and entity data migrations across multiple tenant databases without direct shell access.',
      },
      {
        title: 'Feature Flagging & Intake Template Systems',
        description:
          'Architected granular early-access toggles for AI assistant capabilities (Tax Researcher, Preparer, Reviewer, Planner) alongside version-controlled tax intake form templates (IntakePro) and seeded question libraries.',
      },
    ],
  },
  {
    name: 'Senegal-DemDikk and GTSC',
    category: 'enterprise',
    description: 'Public transit bus e-ticketing and fleet scheduling platform.',
    tags: ['Angular', 'REST APIs', 'Leaflet', 'Payment Gateways'],
  },
  {
    name: 'Thya Technology',
    category: 'ai',
    description: 'Low-latency interface workflows for computer vision and image processing.',
    tags: ['Angular', 'WebSockets', 'Canvas API', 'UI/UX'],
  },
  {
    name: 'GoTrackr',
    category: 'enterprise',
    description: 'Enterprise resource planning (ERP) task allocation and employee performance tracking dashboard.',
    tags: ['Angular', 'Node.js', 'Express', 'Chart.js'],
  },
  {
    name: 'MN ATELIER',
    category: 'ecommerce',
    description: 'High-performance fashion e-commerce storefront with responsive shopping flows.',
    tags: ['Angular', 'Tailwind CSS', 'Stripe', 'SSR'],
  },
];
