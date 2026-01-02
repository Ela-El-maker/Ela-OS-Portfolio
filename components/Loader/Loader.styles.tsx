import styled, { keyframes } from 'styled-components';
import { Props } from './Loader';

const slideOut = keyframes`
  0% {
    transform: translateY(0) scaleY(1) scaleX(1);
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-1000px) scaleY(2) scaleX(0.2);
    filter: blur(40px);
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
`;

export const Container = styled.section<Props>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 333;
  width: 100vw;
  height: 100vh;
  display: ${(p) => (p.isOnScreen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0a0a0a; /* Darker for the terminal look */
  gap: 20px;
  
  /* Your original cool exit animation */
  animation: ${slideOut} 500ms cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
  animation-delay: ${({ loadingDuration }) => `${loadingDuration - 500}ms`};

  /* CRT Scanline Effect */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%);
    background-size: 100% 4px;
    pointer-events: none;
  }
`;

export const TextContainer = styled.div`
  height: 150px; /* Increased to fit the lines */
  overflow: hidden;
  margin-top: 20px;
`;

export const ScrollText = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  color: #33ff33;
  text-align: left;

  .boot-line {
    margin-bottom: 8px;
    animation: ${fadeIn} 0.3s forwards;
    opacity: 0;
  }

  /* Stagger the 6 lines of techStack */
  ${[0, 1, 2, 3, 4, 5].map(i => `
    .boot-line:nth-child(${i + 1}) { animation-delay: ${i * 150}ms; }
  `).join('')}

  .status {
    color: #fff;
    font-weight: bold;
    margin-right: 10px;
  }
`;

export const LoadingBarContainer = styled.div`
  width: 250px;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  margin-top: 10px;
  overflow: hidden;
`;

export const ProgressFill = styled.div<{ duration: number }>`
  height: 100%;
  background: #33ff33;
  width: 0%;
  animation: fillProgress ${({ duration }) => duration}ms linear forwards;

  @keyframes fillProgress {
    to { width: 100%; }
  }
`;