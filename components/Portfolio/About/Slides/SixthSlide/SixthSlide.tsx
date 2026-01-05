import React from 'react';
import * as Styled from './SixthSlide.styles';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import Slide from '../../../Slide/Slide';
import ActionButton from '../../../ActionButton/ActionButton';
import { FiBookOpen, FiChevronsRight, FiCpu, FiTerminal } from 'react-icons/fi';
import { useRouter } from 'next/router';

const SixthSlide = (): JSX.Element => {
  const router = useRouter();
  
  const redirectToProjects = () => router.push('/portfolio/projects');
  const redirectToArticles = () => router.push('/articles');

  return (
    <Slide bgColor={'#020408'} height={'100vh'} anchorID={'sixth-slide'}>
      <Styled.Container>
        {/* Left Module: Projects */}
        <Styled.InteractiveModule className="left-panel" onClick={redirectToProjects}>
          <div className="module-glow" />
          <Styled.ModuleContent>
            <Styled.SystemTag>
              <FiCpu /> EXT_NAV // SYSTEM_BUILD_REPO
            </Styled.SystemTag>
            
            <SectionHeader
              variant={'small'}
              headerText={'I build & architect'}
              margin={'0'}
              color={'#2bff88'}
            />
            
            <PortfolioParagraph
              margin={'2rem 0 3rem 0'}
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence={true}
            >
              Engineering high-performance web applications, specialized tools, and 
              open-source frameworks designed for system integrity.
            </PortfolioParagraph>

            <ActionButton
              buttonText={'Access Projects'}
              icon={<FiChevronsRight className="action-icon" />}
              onClick={redirectToProjects}
            />
          </Styled.ModuleContent>
        </Styled.InteractiveModule>

        {/* Right Module: Articles */}
        <Styled.InteractiveModule className="right-panel" onClick={redirectToArticles}>
          <div className="module-glow" />
          <Styled.ModuleContent>
            <Styled.SystemTag>
              <FiTerminal /> EXT_NAV // KNOWLEDGE_BASE
            </Styled.SystemTag>
            
            <SectionHeader
              variant={'small'}
              headerText={'I write & analyze'}
              margin={'0'}
              color={'#58c7f3'}
            />
            
            <PortfolioParagraph
              margin={'2rem 0 3rem 0'}
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence={true}
            >
              Documenting technical insights on system behavior, TypeScript 
              optimization, and frontend engineering patterns.
            </PortfolioParagraph>

            <ActionButton
              buttonText={'Read Articles'}
              icon={<FiBookOpen className="action-icon" />}
              onClick={redirectToArticles}
            />
          </Styled.ModuleContent>
        </Styled.InteractiveModule>
      </Styled.Container>
    </Slide>
  );
};

export default SixthSlide;