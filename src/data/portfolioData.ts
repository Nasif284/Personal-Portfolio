export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  kind: string;
  oneLiner: string;
  highlight: string;
  liveUrl: string;
  apiRepo?: string;
  clientRepo: string;
  tags: string[];
  image: string;
}

export const PROFILE = {
  name: 'Muhammad Nasif',
  role: 'Software Engineer',
  location: 'Kannur, Kerala',
  phone: '+91 9446574453',
  email: 'nasifhima@gmail.com',
  linkedin: 'https://linkedin.com/in/nasif-pariyaram',
  github: 'https://github.com/Nasif284',
  resumeUrl: '/Muhammad_Nasif_Resume.pdf',
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'voymate',
    number: '01',
    name: 'Voymate',
    kind: 'Solo Travel & Real-Time Matching',
    oneLiner:
      'Matches solo travelers with nearby companions in real time and powers verified community trip bookings.',
    highlight: 'Clean Architecture · PostGIS Spatial Matching · WebRTC Video Calls · LangGraph AI',
    liveUrl: 'https://www.voymate.nasifhub.online/',
    apiRepo: 'https://github.com/Nasif284/Voymate-Server',
    clientRepo: 'https://github.com/Nasif284/Voymate-client',
    tags: ['Node.js', 'TypeScript', 'Next.js', 'PostGIS', 'WebRTC', 'LangGraph', 'AWS'],
    image: '/images/projects/voymate.png',
  },
  {
    id: 'kafla',
    number: '02',
    name: 'Kafla',
    kind: 'Collaborative Group Trip Workspace',
    oneLiner:
      'One workspace for travel groups to plan AI itineraries, map live road routes, split bills with minimal transfers, and jump on group calls.',
    highlight: 'Modular Monolith · Custom MCP Server · Google Routes Proxy · Minimum-Cash-Flow Splitter',
    liveUrl: 'https://www.kafla.nasifhub.online/',
    apiRepo: 'https://github.com/Nasif284/Kafla-server',
    clientRepo: 'https://github.com/Nasif284/Kafla-client',
    tags: ['Node.js', 'TypeScript', 'Next.js', 'Prisma', 'Redis', 'LangGraph & MCP', 'Socket.IO'],
    image: '/images/projects/kafla.png',
  },
  {
    id: 'gracia',
    number: '03',
    name: 'Gracia',
    kind: 'E-Commerce & AI Shopping Platform',
    oneLiner:
      'Full-stack online store and admin console with race-condition-free checkouts, stacked discounts, and a conversational Gemini shopping assistant.',
    highlight: 'Service-Oriented Architecture · MongoDB ACID Transactions · Razorpay Webhooks',
    liveUrl: 'https://www.gratia.nasifhub.online/',
    apiRepo: 'https://github.com/Nasif284/Gracia-E-Commerce-Api',
    clientRepo: 'https://github.com/Nasif284/Gracia-E-Commerce-Client',
    tags: ['Node.js', 'Express', 'React', 'Redux / RTK Query', 'MongoDB', 'Gemini API', 'Docker'],
    image: '/images/projects/gracia.png',
  },
  {
    id: 'concept-ladder',
    number: '04',
    name: 'Concept Ladder AI',
    kind: 'Adaptive AI Learning App',
    oneLiner:
      'Explains any complex topic across three progressive levels—Kid, Beginner, and Advanced—with an interactive AI tutor.',
    highlight: 'Validated JSON Retry Pipeline · Clerk Auth · Supabase Row-Level Security',
    liveUrl: 'https://conceptladder.nasifhub.online/',
    clientRepo: 'https://github.com/Nasif284/Concept_ladder.ai',
    tags: ['React', 'Gemini API', 'Clerk', 'Supabase PostgreSQL', 'Tailwind CSS'],
    image: '/images/projects/concept-ladder.png',
  },
];

export const CORE_STACK = [
  {
    title: 'Backend & Architecture',
    skills: [
      'Node.js',
      'TypeScript',
      'Express.js',
      'Clean / Hexagonal',
      'Microservices',
      'Modular Monolith',
      'DDD & SOLID',
      'REST / GraphQL / gRPC',
    ],
  },
  {
    title: 'Frontend',
    skills: [
      'React.js',
      'Next.js',
      'React Native',
      'Tailwind CSS',
      'TanStack Query',
      'Redux Toolkit',
      'Module Federation',
      'PWA',
    ],
  },
  {
    title: 'Data, Real-Time & AI',
    skills: [
      'PostgreSQL & PostGIS',
      'Prisma ORM',
      'MongoDB',
      'Redis & BullMQ',
      'Socket.IO & WebRTC',
      'Kafka & RabbitMQ',
      'LangGraph & MCP',
      'pgvector RAG',
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      'Docker',
      'AWS (EC2, ECR, RDS, S3, Amplify)',
      'GitHub Actions CI/CD',
      'Nginx',
      'Prometheus & Grafana',
      'OpenTelemetry',
      'Jest & Cypress',
    ],
  },
];

export const EDUCATION = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'IIT Patna',
    year: '2026 – Present',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'IGNOU',
    year: '2022 – 2025',
  },
];
