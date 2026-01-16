import React, { useRef, useMemo, useEffect } from 'react';
import TerminalEditor, { TerminalRef } from 'react-console-emulator';
import { useTerminalConfig } from './Terminal.config';
import MatrixBackground from './MatrixBackground';
import * as Styled from './Terminal.styles';

const Terminal = (): JSX.Element => {
  const config = useTerminalConfig();
  const terminalRef = useRef<TerminalRef & { pushToStdout: (msg: string) => void } | null>(null);

  const hasGreeted = useRef(false);

  // Push greeting ONCE (fixes duplicate welcome message)
  useEffect(() => {
    if (!hasGreeted.current && terminalRef.current) {
      terminalRef.current.pushToStdout(config.greetingMessage.trim());
      hasGreeted.current = true;
    }
  }, [config.greetingMessage]);


  // Memoized commands (stable, no re-registration)
  const commands = useMemo(() => {
    const cmds = {
      code: {
        description: 'Opens Visual Studio Code',
        fn: () => {
          config.openVSCode();
          return 'Opening VS Code...';
        },
      },
      google: {
        description: 'Opens Google Search',
        fn: () => {
          config.openGoogle();
          return 'Opening Google...';
        },
      },
      resume: {
        description: 'Opens Resume',
        fn: () => {
          config.openResume();
          return 'Opening Resume...';
        },
      },
      hack: {
        description: 'Hack the mainframe',
        fn: () => `
WI-FI DE-ACTIVATED...
TARGET: NEIGHBOR_5G [SUCCESS]
ROOT ACCESS GRANTED.
  `.trim(),
      },

      
      fetch: {
        description: 'Display system information',
        fn: () => `
\x1b[32mOS:\x1b[0m Ela-OS v2.0.4
\x1b[32mKERNEL:\x1b[0m 5.15.0-76-generic
\x1b[32mSHELL:\x1b[0m felosh 5.1
\x1b[32mCPU:\x1b[0m AMD Ryzen 9 5900X
\x1b[32mUPTIME:\x1b[0m 14 mins
        `.trim(),
      },
      ls: {
        description: 'List directory contents',
        fn: (...args: any[]) => config.listFiles(args),
      },
      cat: {
        description: 'Read file content',
        fn: (...args: any[]) => config.readFile(args),
      },
      reboot: {
        description: 'Restart the system session',
        fn: () => {
          setTimeout(() => window.location.reload(), 1500);
          return 'System rebooting...';
        },
      },
      clear: {
        description: 'Clear the terminal screen',
        fn: () => {
          terminalRef.current?.clearMessages();
          return '';
        },
      },
      help: {
        description: 'List all available commands',
        fn: () => `Available commands: ${Object.keys(cmds).join(', ')}`, // ✅ fixed
      },
    };

    return cmds;
  }, [config]);

  return (
    <Styled.Container style={{ position: 'relative' }}>
      <MatrixBackground />

      <TerminalEditor
        ref={terminalRef}
        commands={commands}
        noDefaults
        promptLabel="@ela:~$"
        autoFocus
        style={{
          backgroundColor: 'transparent',
          minHeight: '100%',
          maxHeight: '100%',
          padding: '20px',
          position: 'relative',
          zIndex: 1,
        }}
        contentStyle={{ color: '#2bff88' }}
        inputStyle={{ color: '#2bff88', caretColor: '#2bff88' }}
        promptLabelStyle={{ color: '#2bff88' }}
        messageStyle={{
          color: '#2bff88',
          whiteSpace: 'pre-wrap',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '1rem',
          lineHeight: '1.4',
        }}
      />
    </Styled.Container>
  );
};

export default Terminal;
