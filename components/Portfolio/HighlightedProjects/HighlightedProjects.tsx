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
import {
  opticsProjectDetailQuotes,
  projectDetailsQuotes,
} from '../ProjectDetailsSlide/ProjectDetailsSlide.config';

const HighlightedProjects = (): JSX.Element => {
  const { highlightedProjects } = useHighlightedProjectsData();

  return (
    <Styled.Container>
      <Navbar isLogoExpanded={true} />

      {/* HERO SECTION: The Project Manifest */}
      <Styled.ProjectsHero>
        <Styled.HeroLeftColumn>
          <Styled.SystemTag>PROJECT_MANIFEST // SELECTED_WORKS</Styled.SystemTag>
          <SectionHeader
            variant={'medium'}
            headerText={`Selected Projects`}
            margin={'0'}
            color={'#2bff88'}
          />
          <PortfolioParagraph
            margin={'2rem 0'}
            paragraphText={`Engineering robust solutions across diverse environments. Note: Some enterprise-level work is restricted due to NDAs; featured here are personal architectures and shipped products.`}
            withDarkColor={false}
            variant={'large'}
            withAnimatedPresence
          />
        </Styled.HeroLeftColumn>

        <Styled.HeroRightColumn>
          <Styled.ImageContainer position={{ top: '5%', right: '5%' }} className={'laptop-wrapper'}>
            <Styled.FloatingImgContainer variant={'laptop'}>
              <Image src={'/assets/portfolio/landing-laptop.png'} height={800} width={800} alt={'IDE Architecture'} priority className={'laptop'} />
            </Styled.FloatingImgContainer>
          </Styled.ImageContainer>

          <Styled.ImageContainer position={{ top: '40%', right: '15%' }} className={'mobile-wrapper'}>
            <Styled.FloatingImgContainer variant={'phone'}>
              <Image src={'/assets/portfolio/landing-mobile.png'} height={450} width={350} alt={'Mobile Interface'} priority className={'mobile'} />
            </Styled.FloatingImgContainer>
          </Styled.ImageContainer>
        </Styled.HeroRightColumn>

        <ScrollHint />
      </Styled.ProjectsHero>

      {/* PROJECT DEPLOYMENTS */}
      {/* PROJECT DEPLOYMENTS */}
      {highlightedProjects.map((project, index) => (
        <React.Fragment key={project.projectTitle}>
          <ProjectDesktopSlide {...project} />

          {/* Wrap specialized details so they don't break the snap flow */}
          {index === 2 && (
            <Styled.SnapWrapper>
              <ProjectDetailsSlide
                slideHeight={'100%'} /* Fill the wrapper */
                slideBgColor={'#010606'}
                projectName={project.projectTitle}
                projectMobileImg={project.projectMobileImg}
                projectQuotes={projectDetailsQuotes}
              />
            </Styled.SnapWrapper>
          )}

          {index === 3 && (
            <Styled.SnapWrapper>
              <WaveDivider waveImg={'/assets/portfolio/blob-1.svg'} dividerHeight={'150px'} />
              <ProjectDetailsSlide
                slideHeight={'calc(100% - 150px)'} /* Subtract the wave height */
                slideBgColor={'#4831d4'}
                projectName={project.projectTitle}
                projectMobileImg={project.projectMobileImg}
                projectQuotes={opticsProjectDetailQuotes}
              />
            </Styled.SnapWrapper>
          )}
        </React.Fragment>
      ))}
    </Styled.Container>
  );
};

export default HighlightedProjects;