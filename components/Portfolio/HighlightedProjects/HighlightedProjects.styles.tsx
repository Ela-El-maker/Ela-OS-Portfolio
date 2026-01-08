import styled, { css, keyframes } from 'styled-components';
import {
  floatingMobileKeyframes,
  floatingWatchKeyframes,
  floatKeyframes,
} from '../../../design-system/reusableCss';

export const Container = styled.section`
  background-color: #020408;
  height: 100vh; /* Keep this to lock the viewport */
  width: 100%;
  overflow-y: auto; /* Allow scrolling within the locked container */
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth; /* Adds that premium feel when jumping sections */

  /* Hide scrollbar for a clean "OS" look while keeping functionality */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const SystemTag = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: #58c7f3;
  letter-spacing: 3px;
  margin-bottom: 1rem;
`;

export const ProjectsHero = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  scroll-snap-align: center;
  /* Grid Background */
  background-image: 
    linear-gradient(rgba(88, 199, 243, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(88, 199, 243, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    background-size: 30px 30px;
  }
`;

export const HeroLeftColumn = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  z-index: 2;

 h1 { 
    font-size: clamp(2.5rem, 8vw, 4rem); /* Responsive font size */
    font-weight: 800; 
    line-height: 1.1;
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex: 1;
    padding: 2rem;
    h1 { font-size: 2.5rem; }
  }
`;

export const HeroRightColumn = styled.div`
  flex: 0.5;
  position: relative;
  perspective: 1000px;

  &:hover {
    .laptop-wrapper { transform: translate(-20px, -20px) rotate(-2deg); }
    .mobile-wrapper { transform: translate(20px, 20px) rotate(5deg); }
  }

  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const ImageContainer = styled.div<{ position: { top?: string; bottom?: string; right?: string; left?: string } }>`
  position: absolute;
  top: ${({ position }) => position.top};
  bottom: ${({ position }) => position.bottom};
  right: ${({ position }) => position.right};
  left: ${({ position }) => position.left};
  transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  filter: drop-shadow(0 20px 50px rgba(0,0,0,0.5));
`;

export const FloatingImgContainer = styled.figure<{ variant: 'laptop' | 'phone' | 'watch' }>`
  margin: 0;
  ${({ variant }) => {
    if (variant === 'laptop') return css`animation: ${floatKeyframes} 8s ease-in-out infinite;`;
    if (variant === 'phone') return css`animation: ${floatingMobileKeyframes} 7s ease-in-out infinite;`;
    return css`animation: ${floatingWatchKeyframes} 6s ease-in-out infinite;`;
  }}
`;

export const SnapWrapper = styled.section`
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;