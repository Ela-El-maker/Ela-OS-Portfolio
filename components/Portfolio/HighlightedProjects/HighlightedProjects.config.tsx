import React from 'react';
import {
  SiJavascript,
  SiLinux,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiCplusplus,
  SiFlutter,
  SiLaravel,
  SiPhp,
  SiFlask,
  SiQt,
  SiPython,
  SiGooglecloud,
  SiBootstrap,
  SiFastapi,
  SiC,
  SiDocker,
  SiMysql,
  SiTailwindcss,
} from 'react-icons/si';
import { IHighlightedProject } from '../../../types/portfolio';

export const useHighlightedProjectsData = (): {
  highlightedProjects: IHighlightedProject[];
} => {
  const highlightedProjects: IHighlightedProject[] = [
    {
      slideNumberImg: '/assets/portfolio/01.svg',
      projectTitle: 'High-Resilience Device Control (EDR)',
      projectDescription: `
        Friction: Low-resource institutions often lack the infrastructure to secure and manage hardware remotely in high-latency environments.
        Logic: Engineered a multi-layered system using C++ for Kernel-level operations (IOCTL) and FastAPI for real-time WSS orchestration.
        Leverage: Created a unified, cryptographically secure control plane that manages Windows devices regardless of local network constraints.
              `,
      slideHeight: '100vh',
      projectImg: '/assets/portfolio/projects/padlock.png',
      projectMobileImg: '/assets/portfolio/projects/padlock.png',
      projectTechnologies: [
        'C++/C (Kernel)',
        'FastAPI/Laravel',
      ],
      slideBgColor: '#050505',
      liveLink: undefined,
      githubLink: 'https://github.com/Ela-El-maker/secure-device-control',
      technologyIcons: [
        <SiCplusplus key="cpp" className="tech-icon" />,
        <SiC key="c" className="tech-icon" />,
        <SiFastapi key="fastapi" className="tech-icon" />,
        <SiLaravel key="laravel" className="tech-icon" />,
        <SiFlutter key="flutter" className="tech-icon" />,
      ],
    },

    {
      slideNumberImg: '/assets/portfolio/2.svg',
      projectTitle: 'Regional Career Infrastructure',
      projectDescription: `
Friction: Standard job portals fail to handle the fragmented educational and professional data endemic to emerging regional markets.
Logic: Architected a high-concurrency Laravel engine with strict RBAC and multi-tenant logic to unify youth employment pipelines.
Leverage: Transformed a "job board" into a scalable regional infrastructure capable of matching talent to opportunity at scale.
      `,
      slideHeight: '100vh',
      projectImg: '/assets/portfolio/projects/job-portal.png',
      projectMobileImg: '/assets/portfolio/projects/job-portal.png',
      projectTechnologies: [
        'Laravel',
        'Javascript',
        'MySQL',
        'TailwindCSS',
      ],
      slideBgColor: '#010606',
      liveLink: 'https://jobs.felixeladi.co.ke',
      githubLink: 'https://github.com/Ela-El-maker/Job-Carrier-Portal',
      technologyIcons: [
        <SiLaravel key="laravel" className="tech-icon" />,
        <SiMysql key="mysql" className="tech-icon" />,
        <SiJavascript key="js" className="tech-icon" />,
        <SiTailwindcss key="tailwind" className="tech-icon" />,
      ],
    },

    {
      slideNumberImg: '/assets/portfolio/3.svg',
      projectTitle: 'Up-Skill: Fintech-Enabled Learning',
      projectDescription: `
Friction: Access to premium learning tools is often blocked by payment friction and outdated software versions in local hubs.
Logic: Built a Flutter client integrating M-Pesa APIs for instant liquidity and a GitHub-synced engine for mandatory updates.
Leverage: Ensured 100% fleet compliance and simplified the friction of skill-acquisition payments for the local user-base.
      `,
      slideHeight: '100vh',
      projectImg: '/assets/portfolio/projects/pay.png',
      projectMobileImg: '/assets/portfolio/projects/pay.png',
      projectTechnologies: [
        'Flutter',
        'M-Pesa Integration',
        'PHP Backend',
        'MySQL',
      ],
      slideBgColor: '#010606',
      liveLink: undefined,
      githubLink: 'https://github.com/Ela-El-maker/Up-Skill-System',
      technologyIcons: [
        <SiFlutter key="flutter" className="tech-icon" />,
        <SiNodedotjs key="node" className="tech-icon" />,
        <SiJavascript key="js" className="tech-icon" />,
        <SiGooglecloud key="gcloud" className="tech-icon" />,

      ],
    },

    {
      slideNumberImg: '/assets/portfolio/4.svg',
      projectTitle: 'Enterprise SDLC Management System',
      projectDescription: `
Friction: Technical teams often struggle with process overhead, leading to "project drift" and lack of senior oversight.
Logic: Implemented a Spatie-based management system on Laravel 11 to enforce strict role responsibilities from Developer to Admin.
Leverage: Codified the Software Development Life Cycle into a tool that enforces discipline and measurable progress in large teams.
      `,
      slideHeight: '100vh',
      projectImg: '/assets/portfolio/projects/project-man.png',
      projectMobileImg: '/assets/portfolio/projects/project-man.png',
      projectTechnologies: [
        'Laravel 11',
        'Process Automation',
        'PHP',
        'MySQL',],
      slideBgColor: '#010606',
      liveLink: undefined,
      githubLink: 'https://github.com/Ela-El-maker/Software_Project_Management_System',
      technologyIcons: [
        <SiLaravel key="laravel" className="tech-icon" />,
        <SiMysql key="mysql" className="tech-icon" />,
        <SiDocker key="docker" className="tech-icon" />,
        <SiBootstrap key="bootstrap" className="tech-icon" />,
      ],
    },

    {
      slideNumberImg: '/assets/portfolio/055.svg',
      projectTitle: 'Ela-OS: Systems Design Manifesto',
      projectDescription: `
Friction: Portfolios are typically static lists; they fail to demonstrate the "mechanical sympathy" of a true systems architect.
Logic: Reimagined the browser as a desktop environment (OS), using Next.js/TypeScript to showcase complex state management.
Leverage: A high-fidelity proof-of-concept that proves technical depth is most powerful when paired with intuitive design.
      `,
      slideHeight: '100vh',
      projectImg: '/assets/portfolio/projects/portfolio.png',
      projectMobileImg: '/assets/portfolio/projects/portfolio.png',
      projectTechnologies: [
        'Next.js',
        'TypeScript',
        'UI/UX Architecture',
        'Redux Toolkit',

      ],
      slideBgColor: '#4831d4',
      liveLink: 'https://ela-os-portfolio.vercel.app/',
      githubLink: 'https://github.com/Ela-El-maker/Ela-OS-Portfolio',
      technologyIcons: [
        <SiTypescript key="ts" className="tech-icon" />,
        <SiNextdotjs key="next" className="tech-icon" />,
        <SiReact key="react" className="tech-icon" />,
        <SiMongodb key="mongo" className="tech-icon" />,
      ],
    },
  ];

  return { highlightedProjects };
};