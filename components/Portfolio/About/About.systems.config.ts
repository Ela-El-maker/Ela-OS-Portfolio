export interface SystemTool {
  name: string;
  proficiency: number;
  iconSrc: string;
}

export interface SystemModule {
  id: string;
  name: string;
  tools: SystemTool[];
}

export const systemModules: SystemModule[] = [
  {
    id: 'MODULE_01',
    name: 'OS_CORE',
    tools: [
      { name: 'Linux', proficiency: 90, iconSrc: '/assets/portfolio/skills/linux.svg' },
      { name: 'Bash', proficiency: 85, iconSrc: '/assets/portfolio/skills/bash.svg' },
      { name: 'Windows', proficiency: 85, iconSrc: '/assets/portfolio/skills/windows.svg' },

    ],
  },

  {
    id: 'MODULE_02',
    name: 'FRONTEND_INTERFACE',
    tools: [
      { name: 'Flutter', proficiency: 88, iconSrc: '/assets/portfolio/skills/flutter.svg' },
    ],
  },

   {
    id: 'MODULE_03',
    name: 'BACKEND_SERVICES',
    tools: [
      { name: 'Node.js 20+', proficiency: 95, iconSrc: '/assets/portfolio/skills/nodejs.svg' },
      { name: 'POSTMAN', proficiency: 78, iconSrc: '/assets/portfolio/skills/postman-icon.svg' },
      { name: 'PHP / Laravel', proficiency: 80, iconSrc: '/assets/portfolio/skills/php.svg' },
    ],
  },


  {
    id: 'MODULE_04',
    name: 'SYSTEMS_PROGRAMMING',
    tools: [
      { name: 'GraphQL / gRPC', proficiency: 78, iconSrc: '/assets/portfolio/skills/graphql-plain.svg' },
      { name: 'Python', proficiency: 82, iconSrc: '/assets/portfolio/skills/python.svg' },
      { name: 'C++', proficiency: 82, iconSrc: '/assets/portfolio/skills/cpp.svg' },
    ],
  },

  {
    id: 'MODULE_05',
    name: 'DATA_ORCHESTRATION',
    tools: [
      { name: 'Prisma ORM', proficiency: 95, iconSrc: '/assets/portfolio/skills/prisma.svg' },
      { name: 'MySQL / PostgreSQL', proficiency: 90, iconSrc: '/assets/portfolio/skills/mysql.svg' },
      { name: 'Redis Caching', proficiency: 80, iconSrc: '/assets/portfolio/skills/redis.svg' },
    ],
  },

  {
    id: 'MODULE_06',
    name: 'VIRTUALIZATION_CONTAINERS',
    tools: [
      { name: 'Docker', proficiency: 90, iconSrc: '/assets/portfolio/skills/docker.svg' },
      { name: 'Kubernetes', proficiency: 75, iconSrc: '/assets/portfolio/skills/kubernetes.svg' },
      { name: 'VM Management', proficiency: 80, iconSrc: '/assets/portfolio/skills/vm.svg' },
    ],
  },

  {
    id: 'MODULE_07',
    name: 'CLOUD_SERVICES_MONITORING',
    tools: [
      { name: 'Google Cloud Platform', proficiency: 80, iconSrc: '/assets/portfolio/skills/gcp.svg' },
      { name: 'Azure Products', proficiency: 85, iconSrc: '/assets/portfolio/skills/azure.svg' },
      { name: 'AWS Services', proficiency: 75, iconSrc: '/assets/portfolio/skills/aws.svg' },
    ],
  },
];


/**
 * Lightweight helper so slides can consume future dynamic config via a stable hook.
 */
export const useSystemsConfig = () => {
  return { systemModules };
};
