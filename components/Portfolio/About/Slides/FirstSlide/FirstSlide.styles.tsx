import styled, { keyframes } from 'styled-components';

const scanline = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(100%); }
`;

const moveWave = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const HealthMonitorOverlay = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0;
  width: 200%; /* Wider than screen for animation scroll */
  height: 150px;
  pointer-events: none;
  z-index: 0;
  opacity: 0.6;

  .label {
    position: absolute;
    top: 0;
    left: 5%;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.6rem;
    color: rgba(88, 199, 243, 0.3);
    letter-spacing: 2px;
  }

  svg {
    width: 100%;
    height: 100%;
    animation: ${moveWave} 20s linear infinite;
  }
`;


export const TerminalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  align-items: center;
  gap: 40px;
  height: 100%;
  padding: 0 10%;
  position: relative;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;

  &::after {
    content: '';
    position: absolute;
    inset: 0 auto auto 0;
    width: 100%;
    height: 2px;
    background: rgba(88, 199, 243, 0.1);
    animation: ${scanline} 8s linear infinite;
    pointer-events: none;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SystemTagText = styled.span`
  font-size: 0.75rem;
  letter-spacing: 3px;
  color: #58c7f3;
  opacity: 0.7;
  margin-bottom: 12px;
`;

export const TagWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const SystemTag = styled.div`
  background: rgba(88, 199, 243, 0.1);
  border: 1px solid rgba(88, 199, 243, 0.3);
  color: #58c7f3;
  padding: 6px 14px;
  font-size: 0.75rem;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 2px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
  box-shadow: 0 0 15px rgba(88, 199, 243, 0.05);

  .pulse-dot {
    width: 6px;
    height: 6px;
    background: #58c7f3;
    border-radius: 50%;
    box-shadow: 0 0 8px #58c7f3;
    animation: blink 1.5s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`;


// Update GlitchTitle to ensure it doesn't crowd the tag
export const GlitchTitle = styled.h1`
  font-size: clamp(3rem, 10vw, 6rem);
  color: #fff;
  font-weight: 900;
  margin: 0 0 24px 0;
  line-height: 0.9;
  letter-spacing: -2px;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
`;

export const Description = styled.p`
  max-width: 600px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);

  .highlight {
    color: #58c7f3;
    font-weight: 600;
  }
`;

export const LogTable = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  max-width: 450px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  .log-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 0.8rem;
  }

  .key {
    color: rgba(255, 255, 255, 0.4);
  }

  .value {
    color: #ffffff;
  }

  .success {
    color: #58c7f3;
    font-weight: 600;
  }
`;

export const VisualDataPane = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  padding-left: 20px;
  border-left: 1px solid rgba(88, 199, 243, 0.2);
`;

export const GridBox = styled.div`
  height: 150px;
  background-image:
    linear-gradient(rgba(88, 199, 243, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(88, 199, 243, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
`;

export const ScrollTextContainer = styled.div`
  font-size: 0.6rem;
  color: rgba(88, 199, 243, 0.3);
  overflow: hidden;

  .scroll-line {
    margin-bottom: 4px;
  }
`;
