import styled, { keyframes, css } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`;

const fadeOut = keyframes`
  to { opacity: 0; visibility: hidden; }
`;

export const Overlay = styled.div<{ isOnScreen: boolean; loadingDuration: number }>`
  position: fixed;
  inset: 0;
  background: #0d1117;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  
  ${({ isOnScreen, loadingDuration }) => !isOnScreen && css`
    animation: ${fadeOut} 0.5s forwards;
    animation-delay: ${loadingDuration}ms;
  `}
`;

// export const GlassCard = styled.div`
//   width: 400px;
//   padding: 40px;
//   background: rgba(255, 255, 255, 0.03);
//   backdrop-filter: blur(12px);
//   border: 1px solid rgba(255, 255, 255, 0.08);
//   border-radius: 24px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
// `;

export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  color: #58c7f3;
  margin-bottom: 24px;
  animation: ${pulse} 2s infinite ease-in-out;
  filter: drop-shadow(0 0 15px rgba(88, 199, 243, 0.4));
`;

export const StatusText = styled.p`
  font-family: 'Inter', -apple-system, sans-serif;
  color: #e6edf3;
  font-size: 0.95rem;
  font-weight: 300;
  margin-bottom: 32px;
  letter-spacing: 0.5px;
  height: 1.2rem;
`;

export const ProgressBar = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
`;

export const Segment = styled.div<{ active: boolean }>`
  flex: 1;
  height: 12px;
  background: ${({ active }) => active ? '#58c7f3' : 'rgba(255, 255, 255, 0.05)'};
  box-shadow: ${({ active }) => active ? '0 0 10px rgba(88, 199, 243, 0.8)' : 'none'};
  transition: all 0.3s ease;
  border-radius: 2px;
`;

export const AmbientGlow = styled.div`
  position: absolute;
  bottom: -100px;
  width: 60%;
  height: 200px;
  background: radial-gradient(circle, rgba(88, 199, 243, 0.15) 0%, transparent 70%);
  filter: blur(40px);
  pointer-events: none;
`;

export const SpecOverlay = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 0.7rem;
  color: rgba(88, 199, 243, 0.6);
  line-height: 1.8;
  letter-spacing: 1px;
  text-transform: uppercase;

  .label {
    color: rgba(255, 255, 255, 0.3);
    margin-right: 8px;
  }

  .spec-item {
    display: flex;
    justify-content: flex-start;
    animation: ${pulse} 1s infinite alternate;
  }
`;

// Add this to your GlassCard to make it feel more "industrial"
export const GlassCard = styled.div`
  /* ... previous styles */
  position: relative;
  overflow: hidden;

  /* Adding a corner "bracket" decoration */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-top: 2px solid #58c7f3;
    border-left: 2px solid #58c7f3;
    border-radius: 24px 0 0 0;
  }
`;