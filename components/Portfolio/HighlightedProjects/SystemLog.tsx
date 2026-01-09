import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TerminalText = styled.div`
  font-family: 'JetBrains Mono', monospace;
  color: #2bff88;
  font-size: 0.75rem;
  line-height: 1.5;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  
  border-left: 2px solid #2bff8734;
    width: clamp(240px, 70vw, 320px);
  pointer-events: none;
`;

export const SystemLog = ({ text }: { text: string }) => {
    const [displayTitle, setDisplayTitle] = useState('');
    const chars = '!<>-_\\/[]{}—=+*^?#________';

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayTitle(
                text.split('')
                    .map((char, index) => {
                        if (index < iteration) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('')
            );

            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);
        return () => clearInterval(interval);
    }, [text]);

    return (
        <TerminalText>
            {`> INITIALIZING_PROJECT_MODULE...`} <br />
            {`> DECRYPTING: `} <strong>{displayTitle}</strong> <br />
            {`> STATUS: ONLINE`}
        </TerminalText>
    );
};