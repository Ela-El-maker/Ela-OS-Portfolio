import { IHighlightedProject } from '../../../types/portfolio';
import { slideTop, trackingInExpand } from '../../../design-system/reusableCss';
import styled, { keyframes } from 'styled-components';


type ContainerProps = Pick<IHighlightedProject, 'slideBgColor' | 'slideHeight'>;


const scrollCode = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
`;

export const CodeBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%; /* Double height for seamless loop */
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: rgba(43, 255, 136, 0.07); /* Very subtle green */
  line-height: 1.2;
  white-space: pre;
  pointer-events: none;
  z-index: 0;
  padding: 2rem;
  animation: ${scrollCode} 40s linear infinite;
  mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);

  @media ${({ theme }) => theme.media.phone} {
    font-size: 0.55rem;
  }
`;

export const Container = styled.section<ContainerProps>`
  display: flex;
  height: 100vh;
  min-height: 100vh;
  background-color: transparent; /* Let the global grid show through */
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  overflow: hidden;
  padding: 0 0 2rem;

  /* Subtle vignette to focus on the center content */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, transparent 20%, rgba(2, 4, 8, 0.4) 100%);
    pointer-events: none;
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    height: auto;
    min-height: auto;
    padding: 2.5rem 0;
  }
`;

export const LeftColumn = styled.div`
  width: 55%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-right: 1px solid rgba(88, 199, 243, 0.1);

  &::before {
    content: 'MODULE_TYPE: PROJECT_VIEWER';
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.6rem;
    color: #58c7f3;
    letter-spacing: 2px;
    z-index: 2;
  }
  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid rgba(88, 199, 243, 0.1);
    padding: 2rem 0;
  }
`;

export const ImageWrapper = styled.div`
  transform: perspective(1500px) rotateY(15deg);
  border: 1px solid rgba(43, 255, 136, 0.2);
  padding: 5px;
  position: relative;
  max-width: 65%;
  max-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  /* The "Corner Hardware" effect */
  &::after {
    content: '';
    position: absolute;
    top: -5px; right: -5px;
    width: 15px; height: 15px;
    border-top: 2px solid #2bff88;
    border-right: 2px solid #2bff88;
  }

  &:hover {
    transform: perspective(1500px) rotateY(0deg);
    border-color: #2bff88;
  }

  img {
    width: 100%;
    height: auto;
  }

  @media ${({ theme }) => theme.media.tablet} {
    max-width: 80%;
    max-height: 55vh;
  }

  @media ${({ theme }) => theme.media.phone} {
    max-width: 90%;
    max-height: 45vh;
  }
`;

export const IconWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(88, 199, 243, 0.1);
  clip-path: polygon(0 0, 95% 0, 100% 30%, 100% 100%, 5% 100%, 0 70%);

  @media ${({ theme }) => theme.media.phone} {
    gap: 1rem;
    justify-content: center;
  }
`;

export const Figure = styled.figure`
  position: relative;
  display: flex;
  height: 100%;
  gap: 1rem;
  will-change: transform;

  img {
    /* ... existing code ... */
    pointer-events: none; /* Prevents ghost images from interfering with hover */
  }

  @media ${({ theme }) => theme.media.tablet} {
    height: auto;
    justify-content: center;
  }
`;

export const SlideNumber = styled.div`
  z-index: ${({ theme }) => theme.zIndex.lowPriority};
  position: absolute;
  top: 5%;
  right: 0;
  animation: ${slideTop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 250ms;

  @media ${({ theme }) => theme.media.phone} {
    img {
      width: 150px;
      height: auto;
    }
  }
`;

export const Figcaption = styled.figcaption`
  gap: 1rem;
  display: flex;
  margin-left: auto;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 1rem;
    writing-mode: vertical-lr;
    color: ${({ theme }) => theme.portfolio.primaryColor.light};
    animation: ${trackingInExpand} 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @media ${({ theme }) => theme.media.phone} {
    h3 {
      font-size: 0.55rem;
    }
  }
`;

/**
 * RIGHT COLUMN
 */
export const RightColumn = styled.div`
  width: 50%;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  h1 {
    text-align: center;
    line-height: 1;
    margin-bottom: 1rem;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    padding: 2rem 1.5rem;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    gap: 1.25rem;
    h1 {
      font-size: 2.2rem;
      text-align: left;
    }

    p {
      margin: 0.5rem 0 0;
    }
  }
  @media ${({ theme }) => theme.media.phone} {
    padding: 1.5rem 1rem 0;
  }
`;


export const Icon = styled.li`
  .tech-icon {
    font-size: 2rem;
    color: ${({ theme }) => theme.portfolio.primaryColor.light};
  }

  @media ${({ theme }) => theme.media.phone} {
    .tech-icon {
      font-size: 1.5rem;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;

  a {
    width: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideTop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 250ms;
  }

  @media ${({ theme }) => theme.media.phone} {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;

    a {
      width: 100%;
    }
  }
`;
