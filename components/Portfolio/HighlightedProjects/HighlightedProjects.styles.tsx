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
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  position: relative;

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
`;

export const ProjectsHero = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  scroll-snap-align: center;
  overflow: hidden;

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
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Cube = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  animation: ${cubeRotate} 20s linear infinite;

  div {
    position: absolute;
    width: 200px;
    height: 200px;
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
`;