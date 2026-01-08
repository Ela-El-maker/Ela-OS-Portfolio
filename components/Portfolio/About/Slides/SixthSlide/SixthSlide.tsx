import React from 'react';
import * as Styled from './SixthSlide.styles';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import Slide from '../../../Slide/Slide';
import ActionButton from '../../../ActionButton/ActionButton';
import { FiBookOpen, FiChevronsRight, FiCpu, FiTerminal } from 'react-icons/fi';

/**
 * Renders the final navigation slide (Command Center)
 */
const SixthSlide = (): JSX.Element => {
  const handleNavigation = (path: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = path;
    }
  };

  return (
    <Slide bgColor={'#020408'} height={'100vh'} anchorID={'sixth-slide'}>
      <Styled.Container>
        {/* Background CRT Overlay */}
        <Styled.CRTOverlay />

        {/* Left Module: Build/Engineering */}
        <Styled.InteractiveModule
          className="left-panel"
          onClick={() => handleNavigation('/portfolio/projects')}
        >
          <div className="scan-line" />
          <Styled.ModuleContent>
            <Styled.SystemTag>
              <FiCpu /> EXT_NAV // SYSTEM_BUILD_REPO
            </Styled.SystemTag>

            <SectionHeader
              variant={'small'}
              headerText={'I build & create'}
              margin={'0'}
              color={'#2bff88'}
            />

            <PortfolioParagraph
              margin={'2rem 0 3rem 0'}
              paragraphText={`Engineering high-performance web applications and technical tools designed for production integrity.`}
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence={true}
            />

            <ActionButton
              buttonText={'Access Projects'}
              icon={<FiChevronsRight className="action-icon" />}
              onClick={() => handleNavigation('/portfolio/projects')}
            />
          </Styled.ModuleContent>
        </Styled.InteractiveModule>

        {/* Right Module: Write/Documentation */}
        <Styled.InteractiveModule
          className="right-panel"
          onClick={() => handleNavigation('/articles')}
        >
          <div className="scan-line" />
          <Styled.ModuleContent>
            <Styled.SystemTag>
              <FiTerminal /> EXT_NAV // KNOWLEDGE_BASE
            </Styled.SystemTag>

            <SectionHeader
              variant={'small'}
              headerText={'I write & advise'}
              margin={'0'}
              color={'#58c7f3'}
            />

            <PortfolioParagraph
              margin={'2rem 0 3rem 0'}
              paragraphText={
                'Documenting technical insights on system behavior, TypeScript patterns, and engineering balance.'
              }
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence={true}
            />

            <ActionButton
              buttonText={'Read Articles'}
              icon={<FiBookOpen className="action-icon" />}
              onClick={() => handleNavigation('/articles')}
            />
          </Styled.ModuleContent>
        </Styled.InteractiveModule>
      </Styled.Container>
    </Slide>
  );
};

export default SixthSlide;