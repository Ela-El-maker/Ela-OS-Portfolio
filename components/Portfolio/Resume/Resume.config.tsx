import { IProfessionalExperience } from './Resume.types';

export const keyTechSkills = [
  { text: 'C++ / C (Systems)', iconUrl: '/assets/portfolio/skills/cpp.svg' },
  { text: 'Linux / Kernel Basics', iconUrl: '/assets/portfolio/skills/linux.svg' },
  { text: 'FastAPI / Python (Async)', iconUrl: '/assets/portfolio/skills/fastapi.svg' },
  { text: 'Laravel / PHP', iconUrl: '/assets/portfolio/skills/laravel.svg' },
  { text: 'TypeScript / Next.js', iconUrl: '/assets/portfolio/skills/typescript-original.svg' },
  { text: 'Flutter / Dart', iconUrl: '/assets/portfolio/skills/flutter.svg' },
  { text: 'Docker & Infrastructure', iconUrl: '/assets/portfolio/skills/docker.svg' },
  { text: 'Google Cloud Platforms', iconUrl: '/assets/portfolio/skills/gcp.svg' },
  { text: 'Microsoft Azure', iconUrl: '/assets/portfolio/skills/azure.svg' },

];

export const otherSkills = [
  { text: 'Hardware Surgery & Diagnostics', iconUrl: '/assets/portfolio/skills/hardware.png' },
  { text: 'Network Monitoring (Datacenter)', iconUrl: '/assets/portfolio/skills/network.png' },
  { text: 'Cryptographic Identity (Ed25519)', iconUrl: '/assets/portfolio/skills/security.png' },
  { text: 'M-Pesa / Payment Gateways', iconUrl: '/assets/portfolio/skills/mpesa.png' },
  { text: 'Enterprise RBAC Design', iconUrl: '/assets/portfolio/skills/performance.png' },
  { text: 'Windows Internals (Safe/Long Mode)', iconUrl: '/assets/portfolio/skills/re.png' },
  { text: 'Reverse Engineering', iconUrl: '/assets/portfolio/skills/git-original1.svg' },
  { text: 'Compiler Theory (Emerging)', iconUrl: '/assets/portfolio/skills/mysql-original.svg' },
];

export const professionalExperience: IProfessionalExperience[] = [
  {
    variant: 'withResponsibilities',
    company: 'Business Systems Architects Ltd',
    companyImg: '/assets/portfolio/bsa-logo.png',
    role: 'Technical Operations Support',
    timeFrame: '2025 - 2026',
    shortSummary:
      'Supported operational systems in a structured production environment with a focus on reliability, diagnostics, and issue resolution.',
    responsibilities: [
      {
        text: 'Handled OS-level troubleshooting, system configuration issues, and hardware-software failures across production machines.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Maintained uptime-sensitive systems and responded to operational incidents under time constraints.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Improved internal technical workflows through better diagnostics and documentation.',
        iconUrl: '/assets/portfolio/check.svg',
      },
    ],
  },

  {
    variant: 'withResponsibilities',
    company: 'Daystar University',
    companyImg: '/assets/portfolio/daystar.png',
    role: 'ICT Intern – Network & Systems Operations',
    timeFrame: '2021 - 2022',
    shortSummary:
      'Worked as part of the university IT and network operations team supporting campus-wide infrastructure, computer labs, and data center operations.',
    responsibilities: [
      {
        text: 'Installed, terminated, and maintained structured network cabling across computer labs, offices, and academic buildings.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Configured and monitored switches, access points, and campus Wi-Fi infrastructure, identifying outages and degraded segments.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Worked inside the university data center monitoring traffic, uptime, and system health across the campus network.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Refurbished and rebuilt over 300 legacy desktop systems, salvaging components such as RAM, storage, power supplies, and cabling to deploy two fully functional computer labs.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Performed mass OS deployments and upgrades from Windows 7/8/10 to Windows 11, handling data recovery and user migration.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Deployed Linux on legacy hardware where required to improve performance and extend system lifespan.',
        iconUrl: '/assets/portfolio/check.svg',
      },
    ],
  },
  {
    variant: 'withResponsibilities',
    company: 'Independent Systems, Hardware & Software Engineering',
    companyImg: '/assets/portfolio/projects.png',
    role: 'Systems & Software Engineer',
    timeFrame: '2021 - Present',
    shortSummary:
      'Built a long-running independent practice spanning hardware repair, operating systems, networking fundamentals, and full-stack software development. This work evolved organically from hands-on laptop repair for students into designing and building complete software systems to understand modern platforms end-to-end.',
    responsibilities: [
      {
        text: 'Diagnosed, repaired, and optimized hundreds of personal computing systems, handling OS corruption, boot failures, storage issues, and performance bottlenecks across Windows and Linux.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Performed data recovery for students across multiple academic departments, managing disk failures, partition loss, and unsafe shutdown scenarios.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Built full-stack systems including job portals, RBAC-controlled platforms, and e-commerce systems to study real-world enterprise architecture patterns.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Implemented real payment workflows using M-Pesa Daraja API, PayPal, and Paystack, handling authentication, callbacks, and transaction verification.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Developed mobile applications using Flutter, including productivity tools and service-oriented applications.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Applied systems-first thinking across hardware, OS, network behavior, and application layers to understand how failures propagate and how resilient systems are built.',
        iconUrl: '/assets/portfolio/check.svg',
      },
    ],
  }



];