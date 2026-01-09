import React from 'react';
import * as Styled from './HighlightedProjects.styles';
import { useHighlightedProjectsData } from './HighlightedProjects.config';
import Navbar from '../Navbar/Navbar';
import SectionHeader from '../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import Image from 'next/image';
import ScrollHint from '../ScrollHint/ScrollHint';
import ProjectDesktopSlide from '../ProjectDesktopSlide/ProjectDesktopSlide';
import ProjectDetailsSlide from '../ProjectDetailsSlide/ProjectDetailsSlide';
import WaveDivider from '../WaveDivider/WaveDivider';
import { elaOsProjectDetailQuotes } from '../ProjectDetailsSlide/ProjectDetailsSlide.config';
import { SystemLog } from './SystemLog';

const HighlightedProjects = (): JSX.Element => {
  const { highlightedProjects } = useHighlightedProjectsData();
  const lastProject = highlightedProjects[highlightedProjects.length - 1];

  // State to track the active title for the floating terminal
  const [activeTitle, setActiveTitle] = React.useState('MANIFEST');

  return (
    <Styled.Container>
      <Navbar isLogoExpanded={true} />

      {/* HERO SECTION: The Project Manifest */}
      <Styled.ProjectsHero>
        <Styled.HeroLeftColumn>
          <Styled.SystemTag>BOOT_SEQUENCE // Ela PORTFOLIO_V4.0.1</Styled.SystemTag>
          <SectionHeader
            variant={'small'}
            headerText={`PROJECT MANIFEST`}
            margin={'0'}
            color={'#fff'}
          />
          <Styled.HeroParagraphWrapper>
            <PortfolioParagraph
              margin={'2rem 0'}
              paragraphText={`High-integrity system architectures and frontend deployments. Technical documentation and source code available via integrated terminal links below.`}
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence
            />
          </Styled.HeroParagraphWrapper>
        </Styled.HeroLeftColumn>

        <Styled.HeroRightColumn>
          <Styled.HolographicCore>
            {/* Concentric diagnostic rings */}
            <Styled.RadarCircle size="450px" delay="0s" />
            <Styled.RadarCircle size="350px" delay="1s" />
            <Styled.RadarCircle size="250px" delay="2s" />

            {/* The 3D Wireframe Cube */}
            <Styled.Cube>
              <div className="front" />
              <div className="back" />
              <div className="right" />
              <div className="left" />
              <div className="top" />
              <div className="bottom" />
            </Styled.Cube>

            {/* Metadata Floating Labels */}
            <div style={{
              position: 'absolute',
              bottom: '-20%',
              fontFamily: 'JetBrains Mono',
              color: '#58c7f3',
              fontSize: '12px'
            }}>
              [ CORE_ENGINE_ACTIVE: 100% ]
            </div>
          </Styled.HolographicCore>
        </Styled.HeroRightColumn>

        <ScrollHint />
      </Styled.ProjectsHero>

      {/* PROJECT DEPLOYMENTS */}
      {highlightedProjects.map((project, index) => (
        <React.Fragment key={project.projectTitle}>
          {/* Metadata Ribbon above each slide */}
          <Styled.MetadataRibbon>
            <span>DEPLOY_ID: {index + 1}00-ALPHA</span>
            <span>STATUS: OPERATIONAL // V.2026.04</span>
          </Styled.MetadataRibbon>

          {/* Wrap each project slide to handle hover for floating terminal */}
          <div
            onMouseEnter={() => setActiveTitle(project.projectTitle)}
            onMouseLeave={() => setActiveTitle('MANIFEST')}
          >
            <ProjectDesktopSlide {...project} />
          </div>

        </React.Fragment>
      ))}

      {/* FINAL DETAILS SLIDE AFTER ALL PROJECTS */}
      {lastProject && (
        <Styled.SnapWrapper>
          <WaveDivider waveImg={'/assets/portfolio/blob-1.svg'} dividerHeight={'150px'} />
          <ProjectDetailsSlide
            slideHeight={'calc(100% - 150px)'}
            slideBgColor={'#0a0c10'}
            projectName={lastProject.projectTitle}
            projectMobileImg={lastProject.projectMobileImg}
            projectQuotes={elaOsProjectDetailQuotes}
          />
        </Styled.SnapWrapper>
      )}

      {/* Fixed Terminal UI */}
      <Styled.SystemLogWrapper>
        <SystemLog text={activeTitle} />
      </Styled.SystemLogWrapper>
    </Styled.Container>
  );
};

export default HighlightedProjects;
