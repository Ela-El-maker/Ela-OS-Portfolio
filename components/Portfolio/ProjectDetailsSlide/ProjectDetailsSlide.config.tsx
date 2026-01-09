import { ICarouselQuote } from '../../../types/portfolio';

/**
 * PROJECT: SNEAKER_MANIACS
 * PURPOSE: Example of a full-stack e‑commerce kernel
 * Used by: TextCarousel stories/tests
 */
export const projectDetailsQuotes: ICarouselQuote[] = [
  {
    id: 1,
    title: 'SYSTEM_MANIFEST',
    quote:
      'High-throughput commerce engine inspired by sneaker marketplaces. Designed as a modular kernel to showcase complex state orchestration and smooth UI transitions under load.',
  },
  {
    id: 2,
    title: 'PRIMARY_OBJECTIVE',
    quote:
      'Demonstrate a production-style Next.js stack: hybrid rendering (SSG/ISR), secure authentication, guarded admin routes, and a design-system driven component library.',
  },
  {
    id: 3,
    title: 'ARCHITECT_ROLE',
    quote:
      'Single-owner implementation from schema design to deployment. Responsible for API contracts, UI flows, and performance budgets for both server and client.',
  },
  {
    id: 4,
    title: 'RUNTIME_EVALUATION',
    quote:
      'Focus on predictable data flow and cache-aware routing. Includes dark/light theme persistence and route pre-generation for consistent latency across sessions.',
  },
];

/**
 * PROJECT: OPTICS_PORTAL
 * PURPOSE: Example of an academic infrastructure portal
 * Used by: ProjectDetailsSlide inside HighlightedProjects
 */
export const opticsProjectDetailQuotes: ICarouselQuote[] = [
  {
    id: 1,
    title: 'SYSTEM_SPECIFICATION',
    quote:
      'High-speed departmental portal optimized for static generation with dynamic hydration. Uses Next.js API routes as a lightweight backend layer for faculty and student workloads.',
  },
  {
    id: 2,
    title: 'ARCHITECT_LOG',
    quote:
      'Frontend lead responsible for choosing the framework, enforcing type-safety, and wiring a Jest/React Testing Library suite that guards all core flows end-to-end.',
  },
  {
    id: 3,
    title: 'RUNTIME_OUTCOME',
    quote:
      'Delivers seamless navigation across dashboards and public pages with a secured auth boundary. Backed by a Nest.js API tuned for predictable throughput during peak registration periods.',
  },
];

/**
 * PROJECT: ELA_OS_MANIFEST
 * PURPOSE: Example details for the "Ela‑OS" portfolio experience
 * Note: This export is not wired yet; it is here purely as an example
 *       of how you would add a new project-specific details block.
 */
export const elaOsProjectDetailQuotes: ICarouselQuote[] = [
  {
    id: 1,
    title: 'DESIGN_THESIS',
    quote:
      'Treats the browser as an operating system shell. Uses windows, widgets, and desktop metaphors to communicate systems thinking rather than static case studies.',
  },
  {
    id: 2,
    title: 'TECH_STACK',
    quote:
      'Built with Next.js, TypeScript, Redux, and styled-components. Focuses on predictable state management, lazy loading of heavy UI, and resilient client-side interactions.',
  },
  {
    id: 3,
    title: 'PORTFOLIO_ROLE',
    quote:
      'Acts as a living spec for how the author reasons about architecture, performance, and UX. Every interaction is designed to surface process, not just finished UI.',
  },
];