import type { ProjectDetailPoint } from './projects';

export interface PersonalProject {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
  gallery: string[];
  details: ProjectDetailPoint[];
  githubUrl?: string;
}

export const personalProjects: PersonalProject[] = [
  {
    name: 'MediStock',
    tagline: 'Real-Time Critical-Medicine Finder & Reservation Platform',
    description:
      'A real-time critical-medicine finder and reservation platform built to solve a concrete problem with typical pharmacy inventory systems: during shortages, naive check-then-decrement APIs oversell stock, race under concurrent demand, and serve stale results from slow spatial queries.',
    tags: ['Fastify', 'TypeScript', 'Redis', 'PostgreSQL', 'BullMQ', 'React', 'Vite', 'Prisma', 'Docker'],
    image: 'projects/medistock/01.png',
    gallery: [
      'projects/medistock/01.png',
      'projects/medistock/02.png',
      'projects/medistock/03.png',
      'projects/medistock/04.png',
    ],
    details: [
      {
        title: 'Sub-Millisecond Proximity Search',
        description:
          'Designed a Fastify/TypeScript backend that offloads proximity search to Redis GEO indexes, running sub-millisecond GEOSEARCH queries against verified pharmacies joined to a single batched PostgreSQL query for live availability.',
      },
      {
        title: 'Atomic Stock Holds & Race-Safe Reservations',
        description:
          'Solved the overselling problem with an atomic Redis Lua script that checks-and-holds stock in one indivisible step, before a Postgres transaction persists a 30-minute reservation with a one-time pickup code.',
      },
      {
        title: 'Automated Reclaim & Pharmacist OTP-Claim Flow',
        description:
          'Unclaimed holds are auto-reclaimed by a BullMQ delayed-job worker, while reservations are permanently settled through a pharmacist OTP-claim flow, backed by an idempotent batch endpoint for POS stock syncs.',
      },
      {
        title: 'Full Role-Based React/Vite SPA',
        description:
          'Built a React/Vite SPA with dedicated flows for patients (search, hold, live countdown), pharmacists (claim, inventory, batch sync), and admins (pharmacy verification, catalogue management), backed by JWT auth, Prisma/PostgreSQL, and Docker Compose for one-command deployment.',
      },
    ],
    githubUrl: 'https://github.com/dev-ayeshazee/medi-stock',
  },
  {
    name: 'Sakai Blog',
    tagline: 'Full-Stack Blog Platform',
    description:
      'A full-stack blogging platform built to solve a common problem in content-driven apps: making large post archives fast to browse and safe to write to.',
    tags: ['Angular 17', 'PrimeNG', 'AG Grid', 'NestJS', 'TypeORM', 'PostgreSQL', 'JWT', 'Docker'],
    image: 'projects/sakaiblog/01.png',
    gallery: [
      'projects/sakaiblog/01.png',
      'projects/sakaiblog/02.png',
      'projects/sakaiblog/03.png',
      'projects/sakaiblog/04.png',
    ],
    details: [
      {
        title: 'Server-Driven Infinite Row Grid',
        description:
          'The Angular 17 frontend, built on the sakai-ng/PrimeNG starter, uses AG Grid with a server-driven infinite row model to paginate, sort, search, and filter posts entirely through API calls rather than loading everything client-side.',
      },
      {
        title: 'Secured Write Path',
        description:
          'A NestJS + TypeORM + PostgreSQL backend secures writes behind JWT authentication (Passport, bcrypt-hashed passwords) so only logged-in users can publish.',
      },
      {
        title: 'Provider-Agnostic AI Write-Path Pipeline',
        description:
          'New posts pass through an AI-driven pipeline — content moderation, auto-generated excerpts, and tag suggestion — implemented as a provider-agnostic service (an offline heuristic by default, swappable for a real LLM) that talks to a mock Model Context Protocol server.',
      },
      {
        title: 'Resilient UI & Production-Ready Backend',
        description:
          'The UI layer adds route guards, an HTTP interceptor for auth, and optimistic UI on post creation with automatic rollback on failure, while the backend ships with migrations, seed data, and unit tests — the whole stack containerized with Docker Compose.',
      },
    ],
  },
  {
    name: 'SmartSplit',
    tagline: 'Real-Time Group Bill & Grocery Splitter',
    description:
      'A full-stack app that makes splitting a shared bill exact: items are shared unevenly, tax and tip are distributed in proportion to what each person consumed, and rounding never silently drops or invents a penny.',
    tags: ['Angular 18', 'Signals', 'Node.js', 'Express', 'MongoDB', 'SSE', 'TypeScript', 'Docker'],
    image: 'projects/smartsplit/01.png',
    gallery: [
      'projects/smartsplit/01.png',
      'projects/smartsplit/02.png',
      'projects/smartsplit/03.png',
      'projects/smartsplit/04.png',
    ],
    details: [
      {
        title: 'Zero-Drift Settlement Engine',
        description:
          'Built a custom settlement engine using integer-cent arithmetic and the Largest Remainder (Hare–Niemeyer) method, guaranteeing every split reconciles to the exact cent with zero drift across indivisible totals, uneven item weights, and clamped discounts.',
      },
      {
        title: 'Shared Client/Server Calculation Package',
        description:
          'The same engine runs on both the client and server via a shared TypeScript package, so the Angular UI recomputes the full settlement instantly on every tap using Signals, while the API stays the single source of truth.',
      },
      {
        title: 'Real-Time, No-Login Collaboration',
        description:
          'The API pushes live updates to every participant over Server-Sent Events, letting a group edit one tokenized, no-login bill link together in real time and export a ready-to-send WhatsApp settlement summary.',
      },
      {
        title: 'Rigorous Test Coverage',
        description:
          'Backed by a unit-tested calculation engine (25+ cases, including a 10,000-iteration randomized zero-loss proof), an integration-tested REST/SSE API, and a Dockerized deployment.',
      },
    ],
  },
  {
    name: 'MockFlow',
    tagline: 'Dynamic API Contract Sandbox & Network Chaos Engine',
    description:
      'A tool that removes the trade-off frontend teams are usually forced into: static mocks give contract fidelity but no state or failure simulation, while stateful mocking means hand-writing every handler and chaos condition yourself.',
    tags: ['TypeScript', 'Fastify', 'Angular 19', 'Redis', 'WebSocket', 'Docker', 'Vitest'],
    image: 'projects/mockflow/01.png',
    gallery: [
      'projects/mockflow/01.png',
      'projects/mockflow/02.png',
      'projects/mockflow/03.png',
      'projects/mockflow/04.png',
      'projects/mockflow/05.png',
    ],
    details: [
      {
        title: 'Stateful Mocks from a Spec',
        description:
          'Point it at an OpenAPI 3.0/3.1 spec or a set of TypeScript interfaces and it auto-provisions fully stateful CRUD mock endpoints, with writes persisted in Redis across requests and atomic reset.',
      },
      {
        title: 'Deterministic Network Chaos Engine',
        description:
          'A declarative, seeded-PRNG-driven chaos engine injects configurable latency, HTTP failures, token-expiry/401s, and schema drift per route — all deterministic and reproducible from a logged seed.',
      },
      {
        title: 'Fastify Backend with Live Telemetry',
        description:
          'The Fastify backend handles dynamic route matching and Ajv contract validation, streaming WebSocket/SSE telemetry over Redis Pub/Sub to the dashboard.',
      },
      {
        title: 'Angular 19 Chaos Dashboard',
        description:
          'Built a Signals-based chaos config panel, a CDK-virtualized live traffic stream handling hundreds of requests per second, and a Monaco-based schema/data editor.',
      },
      {
        title: 'End-to-End Delivery & Verification',
        description:
          'Shipped end-to-end — architecture, backend, frontend, and Docker deployment — backed by a 46-test Vitest suite and CI, and verified live by driving the full stack through nginx to Redis.',
      },
    ],
  },
];
