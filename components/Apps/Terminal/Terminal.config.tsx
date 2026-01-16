import React from 'react';
import { useActions } from '../../../hooks/useActions';
import VsCode from '../VsCode/VsCode';
import GoogleSearch from '../GoogleSearch/GoogleSearch';
import Resume from '../../Portfolio/Resume/Resume';
import Desktop from '../../Desktop/Desktop';
import SystemTray from '../../SystemTray/SystemTray';
import * as Styled from './Terminal.styles';

const getResponsiveSize = () => {
  if (typeof window === 'undefined') return { width: 800, height: 600 };
  return {
    width: 0.75 * window.innerWidth,
    height: 0.7 * window.innerHeight,
  };
};

// Virtual File System Data
const VIRTUAL_FS: Record<string, string> = {
  'about_me.txt': 'I am a Full-Stack Developer specializing in React, Next.js, and creative UI/UX.',
  'contact.txt': 'Email: elamaker@example.com\nGitHub: github.com/Ela-El-maker',
  'readme.md': 'Welcome to Ela-OS. This is a functional terminal simulation built with React.',
  'secret.sh': 'Nice try! But you need higher clearance for this.'
};

export const useTerminalConfig = () => {
  const { openWindow } = useActions();

  // Helper for 'ls' command
  const listFiles = (args: string[]) => {
    return Object.keys(VIRTUAL_FS).join('    ');
  };

  // Helper for 'cat' command
  const readFile = (args: string[]) => {
    if (args.length === 0) return 'usage: cat <filename>';
    const filename = args[0];
    return VIRTUAL_FS[filename] || `cat: ${filename}: No such file or directory`;
  };

  const openVSCode = () => {
    openWindow({
      windowName: 'VSCode',
      isOpen: true,
      windowIcon: '/assets/icons/startmenu/vscode.svg',
      size: getResponsiveSize(),
      windowContent: <VsCode />,
    });
  };

  const openGoogle = () => {
    openWindow({
      windowName: 'Google',
      isOpen: true,
      windowIcon: '/assets/icons/startmenu/chrome.svg',
      size: getResponsiveSize(),
      windowContent: <GoogleSearch />,
    });
  };

  const openResume = () => {
    openWindow({
      windowName: 'Resume',
      isOpen: true,
      windowIcon: '/assets/icons/recommended/word.png',
      size: getResponsiveSize(),
      windowContent: <Resume />,
    });
  };

  const openLanding = () => {
    openWindow({
      windowName: 'Landing',
      isOpen: true,
      windowIcon: '/assets/icons/recommended/word.png',
      size: getResponsiveSize(),
      windowContent: (
        <Styled.Wrapper>
          <Desktop />
          <SystemTray />
        </Styled.Wrapper>
      ),
    });
  };
  const greetingMessage = `
  ███████╗██╗      █████╗          ██████╗ ███████╗
  ██╔════╝██║     ██╔══██╗        ██╔═══██╗██╔════╝
  █████╗  ██║     ███████║        ██║   ██║███████╗
  ██╔══╝  ██║     ██╔══██║        ██║   ██║╚════██║
  ███████╗███████╗██║  ██║        ╚██████╔╝███████║
  ╚══════╝╚══════╝╚═╝  ╚═╝         ╚═════╝ ╚══════╝
                                                   
           👊 (͡👁 ͜ʖ͡👁) 👋  WELCOME TO ELA-OS 👋 ᕙ(͡ಠ ͜ʖ͡ಠ)ᕗ
                TYPE "HELP" FOR FULL LIST OF COMMANDS
  `.trim();

  return {
    openVSCode,
    openGoogle,
    openResume,
    openLanding,
    greetingMessage,
    listFiles,
    readFile,
    hack: `
      WI-FI DE-ACTIVATED...
      TARGET: NEIGHBOR_5G [SUCCESS]
      ROOT ACCESS GRANTED.
    `,
    sad: `ERROR: SYSTEM FAILURE. LANDING INITIATED.`,
  };
};