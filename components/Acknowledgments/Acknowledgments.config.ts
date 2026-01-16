export const authors: IAuthor[] = [
  {
    id: 1,
    name: '🏆 Next.js Team',
    url: 'https://nextjs.org/',
    github: 'https://github.com/vercel/next.js',
    acknowledgement:
      'for the incredible React framework that powers this portfolio with SSR, SSG, and amazing developer experience.',
  },
  {
    id: 2,
    name: '🏆 React Team',
    url: 'https://reactjs.org/',
    github: 'https://github.com/facebook/react',
    acknowledgement:
      'for the revolutionary JavaScript library that makes building interactive UIs a joy.',
  },
  {
    id: 3,
    name: '🏆 Styled Components',
    url: 'https://styled-components.com/',
    github: 'https://github.com/styled-components/styled-components',
    acknowledgement:
      'for the CSS-in-JS solution that enables beautiful, maintainable styling with theme support.',
  },
  {
    id: 4,
    name: '🏆 Redux & React Redux',
    url: 'https://redux.js.org/',
    github: 'https://github.com/reduxjs/redux',
    acknowledgement:
      'for predictable state management that keeps the desktop OS simulation running smoothly.',
  },
  {
    id: 5,
    name: '🏆 Framer Motion',
    url: 'https://www.framer.com/motion/',
    github: 'https://github.com/framer/motion',
    acknowledgement:
      'for the production-ready motion library that brings the animations and interactions to life.',
  },
  {
    id: 6,
    name: '🏆 React Icons',
    url: 'https://react-icons.github.io/react-icons/',
    github: 'https://github.com/react-icons/react-icons',
    acknowledgement:
      'for the comprehensive icon library that provides beautiful icons throughout the interface.',
  },
  {
    id: 7,
    name: '🏆 React RND',
    url: 'https://github.com/bokuweb/react-rnd',
    github: 'https://github.com/bokuweb/react-rnd',
    acknowledgement:
      'for the draggable and resizable components that make the windows truly interactive.',
  },
  {
    id: 8,
    name: '🏆 Terminal in React',
    url: 'https://github.com/nitin42/terminal-in-react',
    github: 'https://github.com/nitin42/terminal-in-react',
    acknowledgement:
      'for the terminal emulator component that adds a unique touch to the desktop experience.',
  },
  {
    id: 9,
    name: '🏆 Formik & Yup',
    url: 'https://formik.org/',
    github: 'https://github.com/jaredpalmer/formik',
    acknowledgement:
      'for the form management and validation libraries that handle user input seamlessly.',
  },
  {
    id: 10,
    name: '🏆 Mongoose & MongoDB',
    url: 'https://mongoosejs.com/',
    github: 'https://github.com/Automattic/mongoose',
    acknowledgement:
      'for the elegant MongoDB object modeling that powers the backend data persistence.',
  },
  {
    id: 11,
    name: '🏆 CodeCrafters',
    url: 'https://codecrafters.io/',
    github: 'https://github.com/codecrafters-io',
    acknowledgement:
      'for the incredible coding challenges that helped sharpen programming skills and deepen understanding of complex systems.',
  },
  {
    id: 12,
    name: '🏆 Open Source Community',
    url: 'https://opensource.org/',
    github: null,
    acknowledgement:
      'for the countless contributors who build and maintain the tools that make modern web development possible.',
  },
];

interface IAuthor {
  id: number;
  name: string;
  url: string;
  github: string | null;
  acknowledgement: string;
}
