import styled, { keyframes, css } from 'styled-components'; import {
  floatKeyframes,
  slidInCenter,
} from '../../../design-system/reusableCss';

interface Props {
  slideHeight: string;
  slideBgColor: string;
}
const scanBar = keyframes`
  0% { transform: translateY(-200px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(200px); opacity: 0; }
`;
export const Container = styled.section<Props>`
  display: flex;
  height: ${({ slideHeight }) => slideHeight || '100%'};
  background-color: ${({ slideBgColor }) => slideBgColor};
  position: relative;
  overflow: hidden;

  /* Background Diagnostic Grid */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(88, 199, 243, 0.05) 1px, transparent 1px);
    background-size: 30px 30px;
    pointer-events: none;
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: ${slidInCenter} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 500ms;
  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
    &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 400px;
    background: linear-gradient(to bottom, transparent, #2bff88, transparent);
    left: 10%;
    animation: ${scanBar} 4s linear infinite;
  }
`;

export const LevitatingWrapper = styled.div`
  animation: ${floatKeyframes} 6s ease-in-out infinite;
`;
export const Figure = styled.figure`
  position: relative;
  width: 300px;
  height: 580px;
  /* Perspective and tilt for the isometric "floating" effect */
  transform: rotate(-30deg) skew(25deg) scale(0.8);
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  will-change: transform;
  filter: saturate(0.8) contrast(1.1);
  img {
    position: absolute;
    left: -50px;
    width: 100%;
    transition: transform 0.5s ease, opacity 0.5s ease;
    filter: drop-shadow(-8px 5px 2px #00254d);
    /* Prevents ghost images from capturing the mouse cursor */
    pointer-events: none; 
  }

  /* Stacked Layer Effect on Hover */
  &:hover img:nth-child(4) {
    transform: translate(160px, -160px);
    opacity: 1;
  }

  &:hover img:nth-child(3) {
    transform: translate(120px, -120px);
    opacity: 0.8;
  }

  &:hover img:nth-child(2) {
    transform: translate(80px, -80px);
    opacity: 0.6;
  }

  &:hover img:nth-child(1) {
    transform: translate(40px, -40px);
    opacity: 0.4;
  }

  @media ${({ theme }) => theme.media.phone} {
    width: 200px;
    height: 480px;
    transform: rotate(-35deg) skew(25deg) scale(0.65);
    
    img {
      left: -10px;
      top: 50px;
    }
  }
    &::before {
    content: 'SCANNING_OS_INTEGRITY...';
    position: absolute;
    top: -40px;
    left: 0;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: #2bff88;
    letter-spacing: 2px;
  }
&::after {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    width: 400px; height: 400px;
    border: 1px dashed rgba(88, 199, 243, 0.4);
    box-shadow: 0 0 20px rgba(88, 199, 243, 0.1);    border-radius: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    animation: rotateSlow 20s linear infinite;
  }

  @keyframes rotateSlow {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }
`;


export const RightColumn = styled.div`
  width: 50%;

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    height: auto;
    padding: 1.5rem 1.5rem 3rem;
  }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const reallocPulse = keyframes`
  0% { background: rgba(43, 255, 136, 0); }
  20% { background: rgba(43, 255, 136, 0.3); }
  100% { background: rgba(43, 255, 136, 0); }
`;

const shiftData = keyframes`
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
`;

export const KernelTerminal = styled.div`
  width: 80%;
  height: 70%;
  background: #05070a;
  border: 1px solid #1a1d23;
  padding: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  
  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; width: 100%; height: 2px;
    background: rgba(43, 255, 136, 0.3);
    z-index: 5;
    animation: ${scanline} 8s linear infinite;
  }
`;

export const HexGrid = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: rgba(88, 199, 243, 0.4);
  line-height: 1.4;
  user-select: none;
`;

export const RegisterStack = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 120px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const StatusCursor = styled.span`
  animation: ${blink} 1s step-end infinite;
  margin-left: 10px;
  color: #2bff88;
`;

export const RegisterValue = styled.div<{ active?: boolean }>`
  border: 1px solid ${props => props.active ? '#2bff88' : '#1a1d23'};
  padding: 4px 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: ${props => props.active ? '#2bff88' : '#4a4e57'};
  background: ${props => props.active ? 'rgba(43, 255, 136, 0.05)' : 'transparent'};
  
  span { color: #58c7f3; margin-right: 8px; }
`;
const pulseBuffer = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
`;

export const MemoryMapContainer = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 'JetBrains Mono', monospace;

  @media ${({ theme }) => theme.media.tablet} {
    height: auto;
  }
`;

export const MemorySegment = styled.div<{ variant: 'kernel' | 'stack' | 'heap' | 'text'; isAllocating?: boolean }>`
  width: 100%;
  border: 1px solid rgba(88, 199, 243, 0.2);
  padding: 15px;
  position: relative;
  background: rgba(10, 12, 16, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  ${({ variant }) => variant === 'kernel' && css`
    background: rgba(43, 255, 136, 0.05);
    border-color: #2bff88;
    color: #2bff88;
  `}

  &::before {
    content: '${({ variant }) => variant.toUpperCase()}';
    position: absolute;
    top: -8px;
    left: 10px;
    font-size: 8px;
    background: #0a0c10;
    padding: 0 5px;
    color: #58c7f3;
  }

  /* Fixed the 'css' error here */
  ${({ isAllocating }) => isAllocating && css`
    animation: ${reallocPulse} 0.6s ease-out;
    border-color: #2bff88;
    box-shadow: inset 0 0 15px rgba(43, 255, 136, 0.1);
  `}
`;

export const HexValue = styled.span`
  animation: ${shiftData} 0.4s ease-out both;
  font-variant-numeric: tabular-nums;
`;

export const DataStream = styled.div`
  height: 2px;
  flex-grow: 1;
  margin: 0 20px;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 10px,
    #2bff88 10px,
    #2bff88 20px
  );
  animation: ${pulseBuffer} 2s infinite;
`;