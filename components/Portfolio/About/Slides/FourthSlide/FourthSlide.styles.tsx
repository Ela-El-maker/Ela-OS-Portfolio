import styled, { keyframes, css } from 'styled-components';

const draw = keyframes`
  0% { stroke-dashoffset: 200; opacity: 0; }
  100% { stroke-dashoffset: 0; opacity: 1; }
`;
const scan = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(1000%); }
`;
const fadeInScale = keyframes`
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;
const rotateHUD = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
`;

const pulseGlow = keyframes`
  0% { filter: drop-shadow(0 0 2px #58c7f3); }
  50% { filter: drop-shadow(0 0 10px #58c7f3); }
  100% { filter: drop-shadow(0 0 2px #58c7f3); }
`;

// "Marching Ants" data flow effect
const dataFlow = keyframes`
  to {
    stroke-dashoffset: -20;
  }
`;
const flow = keyframes`
  0% { stroke-dashoffset: 100; opacity: 0; }
  50% { opacity: 1; }
  100% { stroke-dashoffset: 0; opacity: 0; }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(88, 199, 243, 0.4); }
  70% { box-shadow: 0 0 0 15px rgba(88, 199, 243, 0); }
  100% { box-shadow: 0 0 0 0 rgba(88, 199, 243, 0); }
`;

export const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  /* This creates a slight dimming of the background to focus on the system */
  background: radial-gradient(circle at center, rgba(88, 199, 243, 0.05) 0%, transparent 70%);
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 12%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }
`;

export const SystemTag = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: rgba(88, 199, 243, 0.85);
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.9rem;
  border: 1px solid rgba(88, 199, 243, 0.3);
  border-radius: 999px;
  margin-bottom: 1.5rem;
`;

export const InsightBadge = styled.div`
  margin-top: 2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  color: #e3f6ff;
  text-transform: uppercase;

  .code-bracket {
    color: #58c7f3;
    font-size: 1rem;
  }
`;

export const SchematicContainer = styled.div`
  position: relative;
  width: 400px;
  height: 300px;
  perspective: 1000px;
`;

export const DataFlowLines = styled.svg`
  position: absolute;
  width: 100%; height: 100%;
  fill: none;
  stroke: #58c7f3;
  stroke-width: 1;
  stroke-dasharray: 200;
  
  .line { animation: ${draw} 2s forwards ease-out; }
  .line-1 { animation-delay: 0.5s; }
  .line-2 { animation-delay: 1s; }
  .line-3 { animation-delay: 1.5s; }
`;

export const TechSatellite = styled.div`
  position: absolute;
  width: 55px; height: 55px;
  background: rgba(10, 12, 16, 0.8);
  border: 1px solid rgba(88, 199, 243, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: ${fadeInScale} 0.5s forwards ease-out;

  &.sat-1 { top: 10%; right: 10%; animation-delay: 0.8s; }
  &.sat-2 { bottom: 10%; right: 10%; animation-delay: 1.3s; }
  &.sat-3 { bottom: 10%; left: 10%; animation-delay: 1.8s; }
`;

export const DiagnosticConsole = styled.div`
  margin-top: 2rem;
  background: rgba(2, 4, 8, 0.9);
  border: 1px solid rgba(88, 199, 243, 0.2);
  border-radius: 6px;
  position: relative;
  overflow: hidden;

  /* Scanning line effect */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: rgba(88, 199, 243, 0.3);
    box-shadow: 0 0 10px #58c7f3;
    animation: ${scan} 4s linear infinite;
    z-index: 5;
  }
`;

export const CentralCore = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 90px; height: 90px;
  z-index: 10;

  .inner-node {
    width: 100%; height: 100%;
    background: #020408;
    border: 2px solid #58c7f3;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #58c7f3;
    font-family: 'JetBrains Mono', monospace;
    font-weight: bold;
    font-size: 0.7rem;
    position: relative;
    z-index: 2;
    animation: ${pulseGlow} 2s infinite;
  }

  /* Rotating HUD Ring */
  &::after {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    width: 120px; height: 120px;
    border: 1px dashed rgba(88, 199, 243, 0.4);
    border-radius: 50%;
    animation: ${rotateHUD} 10s linear infinite;
  }
`;


export const ParagraphGrid = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 1px;
    background: rgba(88, 199, 243, 0.15);
    transform: translateX(-50%);
  }
`;

export const LogContent = styled.div`
  padding: 20px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  line-height: 1.6;

  .log-entry {
    margin-bottom: 8px;
    .time { color: rgba(255, 255, 255, 0.2); margin-right: 10px; }
    
    &.warn { color: #ffbd2e; }
    &.error { color: #ff5f56; text-shadow: 0 0 5px rgba(255, 95, 86, 0.3); }
    &.success { color: #27c93f; }
  }
`;

export const BlinkingCursor = styled.div`
  display: inline-block;
  width: 8px;
  height: 15px;
  background: #58c7f3;
  margin-left: 5px;
  animation: ${blink} 1s step-end infinite;
`;