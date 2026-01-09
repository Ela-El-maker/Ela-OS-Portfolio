import styled, { css, keyframes } from 'styled-components';
import {
  floatingMobileKeyframes,
  floatKeyframes,
} from '../../../design-system/reusableCss';

// Engineering Scanline Effect
const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;
const scanLineMove = keyframes`
  from { top: -100px; }
  to { top: 100vh; }
`;

const dataFlow = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100px 100px; }
`;

export const Container = styled.section`
  background-color: #020408;
  min-height: 100vh;
  width: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
  position: relative;
  scroll-snap-type: none;

  /* THE PERSISTENT GRID SYSTEM */
  background-image: 
    /* Minor Grid Lines (20px) */
    linear-gradient(rgba(88, 199, 243, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(88, 199, 243, 0.05) 1px, transparent 1px),
    /* Major Grid Lines (100px) */
    linear-gradient(rgba(88, 199, 243, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(88, 199, 243, 0.1) 1px, transparent 1px);
  background-size: 20px 20px, 20px 20px, 100px 100px, 100px 100px;
  
  /* THIS KEEPS THE GRID FROM MOVING DURING SCROLL */
  background-attachment: fixed;

  &::-webkit-scrollbar {
    display: none;
  };
&::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: 
      linear-gradient(90deg, transparent 49%, rgba(43, 255, 136, 0.1) 50%, transparent 51%),
      linear-gradient(transparent 49%, rgba(43, 255, 136, 0.1) 50%, transparent 51%);
    background-size: 100px 100px;
    animation: ${dataFlow} 15s linear infinite;
    pointer-events: none;
    z-index: 1;
  }
    &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(43, 255, 136, 0.05),
      transparent
    );
    animation: ${scanLineMove} 8s linear infinite;
    pointer-events: none;
    z-index: 99;
  }
  @media ${({ theme }) => theme.media.desktop} {
    scroll-snap-type: y mandatory;
  }
`;

export const ProjectsHero = styled.div`
  min-height: 100vh;
  display: flex;
  position: relative;
  scroll-snap-align: center;
  overflow: hidden;
  padding: 4rem 5%;
  gap: 3rem;

  /* Corner Diagnostic Brackets */
  &::before, &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    border: 2px solid #58c7f3;
    z-index: 10;
  }
  &::before { top: 40px; left: 40px; border-right: 0; border-bottom: 0; }
  &::after { bottom: 40px; right: 40px; border-left: 0; border-top: 0; }
  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    min-height: auto;
    padding: 3rem 1.5rem 4rem;
    gap: 2.5rem;
  }

  @media ${({ theme }) => theme.media.phone} {
    padding: 2.5rem 1rem 3rem;
    gap: 2rem;
  }
`;

export const SystemTag = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: #2bff88;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    background: #2bff88;
    margin-right: 10px;
    clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 70% 100%, 0% 100%);
  }
  @media ${({ theme }) => theme.media.phone} {
    font-size: 0.6rem;
    letter-spacing: 3px;
  }
`;

export const HeroLeftColumn = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8%;
  z-index: 2;

  h1 { 
    font-family: 'Inter', sans-serif;
    font-size: clamp(3rem, 10vw, 5.5rem);
    font-weight: 900; 
    line-height: 0.9;
    letter-spacing: -2px;
    color: #fff;
    text-shadow: 0 0 20px rgba(88, 199, 243, 0.3);
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex: 1;
    padding: 0;
    text-align: center;

    h1 {
      font-size: clamp(2.5rem, 8vw, 3.75rem);
      margin-top: 1rem;
    }
  }

  @media ${({ theme }) => theme.media.phone} {
    align-items: center;
  }
`;

export const HeroRightColumn = styled.div`
  flex: 0.4;
  position: relative;
  perspective: 2000px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* The "Scanner" overlay */
  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(to bottom, transparent, rgba(88, 199, 243, 0.1), transparent);
    animation: ${scanline} 4s linear infinite;
    pointer-events: none;
  }
  @media ${({ theme }) => theme.media.tablet} {
    flex: unset;
    width: 100%;
    min-height: 320px;
  }
`;

export const ImageContainer = styled.div<{ position: { top?: string; right?: string } }>`
  position: absolute;
  top: ${({ position }) => position.top};
  right: ${({ position }) => position.right};
  transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
  filter: drop-shadow(0 0 30px rgba(0,0,0,0.8));
`;

export const FloatingImgContainer = styled.figure<{ variant: 'laptop' | 'phone' }>`
  margin: 0;
  border: 1px solid rgba(88, 199, 243, 0.2);
  padding: 10px;
  background: rgba(2, 4, 8, 0.5);
  backdrop-filter: blur(10px);
  animation: ${floatKeyframes} 8s ease-in-out infinite;
`;

export const SnapWrapper = styled.section`
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(88, 199, 243, 0.1);
  @media ${({ theme }) => theme.media.tablet} {
    height: auto;
    min-height: 100vh;
  }
`;

const cubeRotate = keyframes`
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
`;

export const HolographicCore = styled.div`
  position: relative;
  width: clamp(260px, 40vw, 420px);
  height: clamp(260px, 40vw, 420px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Cube = styled.div`
  width: clamp(140px, 20vw, 220px);
  height: clamp(140px, 20vw, 220px);
  position: relative;
  transform-style: preserve-3d;
  animation: ${cubeRotate} 20s linear infinite;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid #2bff88;
    background: rgba(43, 255, 136, 0.05);
    box-shadow: 0 0 15px rgba(43, 255, 136, 0.2);
  }

  /* 3D Sides */
  .front  { transform: translateZ(100px); }
  .back   { transform: rotateY(180deg) translateZ(100px); }
  .right  { transform: rotateY(90deg) translateZ(100px); }
  .left   { transform: rotateY(-90deg) translateZ(100px); }
  .top    { transform: rotateX(90deg) translateZ(100px); }
  .bottom { transform: rotateX(-90deg) translateZ(100px); }
`;

export const RadarCircle = styled.div<{ size: string; delay: string }>`
  position: absolute;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border: 1px solid rgba(88, 199, 243, 0.3);
  border-radius: 50%;
  animation: ${pulseGlow} 4s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay};

  @media ${({ theme }) => theme.media.phone} {
    width: calc(${({ size }) => size} * 0.7);
    height: calc(${({ size }) => size} * 0.7);
  }
`;

export const HeroParagraphWrapper = styled.div`
  border-left: 2px solid #2bff88;
  padding-left: 2rem;

  @media ${({ theme }) => theme.media.tablet} {
    border-left: none;
    border-top: 1px solid rgba(43, 255, 136, 0.3);
    padding: 1.5rem 0 0;
  }
`;

export const MetadataRibbon = styled.div`
  background: #0a0c10;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #1a1d23;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  color: #58c7f3;
  letter-spacing: 1px;

  span:last-child {
    color: #2bff88;
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  @media ${({ theme }) => theme.media.phone} {
    font-size: 0.6rem;
  }
`;

export const SystemLogWrapper = styled.div`
  position: fixed;
  bottom: 40px;
  left: 40px;
  z-index: 100;

  @media ${({ theme }) => theme.media.tablet} {
    bottom: 20px;
    left: 20px;
    transform: scale(0.95);
  }

  @media ${({ theme }) => theme.media.phone} {
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%) scale(0.9);
    width: min(90vw, 320px);
  }
`;