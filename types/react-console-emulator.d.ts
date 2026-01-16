declare module 'react-console-emulator' {
  import { FC, ReactNode, Ref } from 'react';

  export interface TerminalRef {
    clearMessages: () => void;
  }

  export interface TerminalProps {
    ref?: Ref<TerminalRef>;
    commands: Record<string, {
      description: string;
      fn: (...args: any[]) => string | void;
    }>;
    noDefaults?: boolean;
    welcomeMessage?: string;
    promptLabel?: string;
    autoFocus?: boolean;
    style?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    promptLabelStyle?: React.CSSProperties;
    messageStyle?: React.CSSProperties;
  }

  const Terminal: FC<TerminalProps>;
  export default Terminal;

  export { TerminalRef };
}