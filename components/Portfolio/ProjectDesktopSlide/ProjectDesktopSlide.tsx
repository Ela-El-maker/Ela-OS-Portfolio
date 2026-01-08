import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './ProjectDesktopSlide.styles';
import { IHighlightedProject } from '../../../types/portfolio';
import Image from 'next/image';
import SectionHeader from '../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import ActionButton from '../ActionButton/ActionButton';
import { FiCast, FiGithub } from 'react-icons/fi';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import ScrollHint from '../ScrollHint/ScrollHint';

/**
 *Renders full-viewport project slide
 *@function Slide
 *@param {IHighlightedProject} projectDetails - project details data to be mapped into view
 *@returns {JSX.Element} - Rendered ProjectDesktopSlide component
 */
const SOURCE_CODE_FEED = `
import {SystemCore} from '@ela-os/kernel';
export const ProjectModule = ({ id, status }) => {
    const [active, setActive] = useState(true);
    
    useEffect(() => {
      SystemCore.initilizeDeployment({
        id: id,
        env: 'production',
        optimization: 'gpu_accelerated'
      });
    }, [id]);

 return (
      <ArchitectureLayer>
        <ComputeEngine speed="high" />
        <InterfaceLayer layout="blueprint" />
      </ArchitectureLayer>
    );
  };
  
  // REPEATING DATA BUFFER...
`.repeat(10); // Repeat to fill the scrolling area


const ProjectDesktopSlide = ({
  slideNumberImg,
  projectDescription,
  projectImg,
  projectTechnologies,
  projectTitle,
  slideBgColor,
  technologyIcons,
  slideHeight,
  liveLink,
  githubLink,
}: IHighlightedProject): JSX.Element | null => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isElementVisible] = useIntersectionObserver(containerRef, {
    threshold: 0.5,
  });
  const [isOnScreen, setIsOnScreen] = useState(false);
  useEffect(() => {
    if (isElementVisible && !isOnScreen) setIsOnScreen(true);
  }, [isElementVisible, isOnScreen]);

  return (
    <Styled.Container
      slideHeight={slideHeight}
      slideBgColor={slideBgColor}
      ref={containerRef}
    >
      {isOnScreen && (
        <>
          <Styled.LeftColumn>
            <Styled.CodeBackground>
              {SOURCE_CODE_FEED}

            </Styled.CodeBackground>
            <Styled.Figure>
              <Styled.SlideNumber>
                {slideNumberImg && (
                  <Image
                    src={slideNumberImg}
                    height={200}
                    width={200}
                    quality={95}
                    style={{ objectFit: 'contain' }}
                    alt={`This image indicates the number of current slide`}
                  />
                )}
              </Styled.SlideNumber>

              <Styled.Figcaption>
                <h3>{projectTechnologies.join(` ● `)}</h3>
              </Styled.Figcaption>
              <Styled.ImageWrapper>
                <Image
                  src={projectImg}
                  height={800}
                  width={800}
                  quality={95}
                  priority
                  style={{ objectFit: 'contain', zIndex: 1 }}
                  alt={projectTitle}
                />
              </Styled.ImageWrapper>
            </Styled.Figure>
          </Styled.LeftColumn>

          <Styled.RightColumn>
            <SectionHeader
              variant={'extraSmall'}
              headerText={projectTitle}
              margin={'0'}
              color={'#2bff88'}
              withGradient
            />

            <Styled.IconWrapper>
              {technologyIcons.map((icon, id) => (
                <Styled.Icon key={id}>{icon}</Styled.Icon>
              ))}
            </Styled.IconWrapper>
            <PortfolioParagraph
              margin={'2rem 0'}
              paragraphText={projectDescription}
              withDarkColor={false}
              variant={'medium'}
              withAnimatedPresence={true}
            />
            <Styled.ButtonsWrapper>
              <ActionButton
                renderAsLink
                href={liveLink}
                buttonText={'Explore'}
                icon={<FiCast className={'action-icon'} />}
              />
              {githubLink && (
                <ActionButton
                  renderAsLink
                  href={githubLink}
                  buttonText={'GitHub'}
                  icon={<FiGithub className={'action-icon'} />}
                />
              )}
            </Styled.ButtonsWrapper>
          </Styled.RightColumn>
        </>
      )}
      <ScrollHint />

    </Styled.Container>

  );
};

export default ProjectDesktopSlide;
