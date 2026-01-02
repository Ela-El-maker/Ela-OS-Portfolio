import React, { useEffect, useState } from 'react';
import * as Styled from './Loader.styles';
import Logo from '../Portfolio/Logo/Logo';

export interface Props {
  isOnScreen: boolean;
  loadingDuration: number;
}

const Loader = ({ isOnScreen, loadingDuration }: Props): JSX.Element => {
  const [isLogoExpanded, setIsLogoExpanded] = useState(true);
  
  const techStack = [
    "Initializing JS Core",
    "Loading TS Engine",
    "Mounting React UI",
    "Optimizing Next.js",
    "Booting Node.js",
    "Caffeinating..."
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogoExpanded(false);
    }, loadingDuration - 1000);
    return () => clearTimeout(timer);
  }, [loadingDuration]);

  return (
    <Styled.Container isOnScreen={isOnScreen} loadingDuration={loadingDuration}>
      <div className="terminal-wrapper">
        <Logo isExpanded={isLogoExpanded} />
        
        <Styled.TextContainer>
          <Styled.ScrollText>
            {techStack.map((text, index) => (
              <div key={index} className="boot-line">
                <span className="status">[ OK ]</span>
                <span className="command">{text}</span>
              </div>
            ))}
          </Styled.ScrollText>
        </Styled.TextContainer>

        {/* This represents the 'HDD' activity */}
        <Styled.LoadingBarContainer>
          <Styled.ProgressFill duration={loadingDuration} />
        </Styled.LoadingBarContainer>
      </div>
    </Styled.Container>
  );
};

export default Loader;