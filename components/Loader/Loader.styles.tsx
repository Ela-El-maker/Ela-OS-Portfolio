import styled, { keyframes, css } from 'styled-components';

const flicker = keyframes`
  0% { opacity: 0.8; }
  5% { opacity: 0.9; }
  10% { opacity: 0.8; }
  100% { opacity: 1; }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const blink = keyframes`
  50% { opacity: 0; }
`;

export const Overlay = styled.div<{ isOnScreen: boolean; loadingDuration: number }>`
  position: fixed;
  inset: 0;
  background: #05070a;
  color: #00f2ff;
  font-family: 'JetBrains Mono', monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
  transition: opacity 0.8s ease;
  
  ${({ isOnScreen }) => !isOnScreen && css`
    opacity: 0;
    pointer-events: none;
  `}
`;

export const Scanline = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 242, 255, 0.05) 50%,
    transparent 100%
  );
  height: 100px;
  width: 100%;
  z-index: 10;
  animation: ${scanline} 8s linear infinite;
  pointer-events: none;
`;

export const TerminalContainer = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: rgba(0, 20, 30, 0.4);
  border: 1px solid rgba(0, 242, 255, 0.2);
  backdrop-filter: blur(10px);
  position: relative;
  animation: ${flicker} 0.15s infinite;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 242, 255, 0.2);
  padding-bottom: 10px;
  font-size: 0.7rem;
  letter-spacing: 2px;
`;

export const LogArea = styled.div`
  flex: 1;
  padding-top: 20px;
  font-size: 0.8rem;
  line-height: 1.6;
  .log-line { color: rgba(0, 242, 255, 0.7); }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 15px;
  background: #00f2ff;
  margin-left: 5px;
  animation: ${blink} 0.8s infinite;
`;

export const VisualizerArea = styled.div`
  position: absolute;
  right: 30px;
  top: 80px;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PulseCircle = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid #00f2ff;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 242, 255, 0.4);
  animation: ${keyframes`0%{transform:scale(1)} 50%{transform:scale(1.1)} 100%{transform:scale(1)}`} 2s infinite;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  border-top: 1px solid rgba(0, 242, 255, 0.1);
  padding-top: 15px;

  .stat {
    display: flex;
    flex-direction: column;
    .label { font-size: 0.6rem; color: rgba(0, 242, 255, 0.4); }
    .value { font-size: 1rem; font-weight: bold; }
  }
`;

export const ProgressWrapper = styled.div`
  display: flex;
  gap: 3px;
  margin-top: 20px;
`;

export const BarSegment = styled.div<{ active: boolean }>`
  flex: 1;
  height: 6px;
  background: ${({ active }) => active ? '#00f2ff' : 'rgba(0, 242, 255, 0.1)'};
  box-shadow: ${({ active }) => active ? '0 0 8px #00f2ff' : 'none'};
  transition: background 0.1s ease;
`;

export const CornerDecor = styled.div<{ position: 'top-left' | 'bottom-right' }>`
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid #00f2ff;
  ${({ position }) => position === 'top-left' ? css`
    top: 20px; left: 20px; border-right: none; border-bottom: none;
  ` : css`
    bottom: 20px; right: 20px; border-left: none; border-top: none;
  `}
`;

export const HexGrid = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background-image: radial-gradient(#00f2ff 0.5px, transparent 0.5px);
  background-size: 10px 10px;
`;