import styled, { keyframes } from 'styled-components';

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(88, 199, 243, 0.05) 0%, transparent 80%),
    linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
    linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  background-size: 100% 100%, 100% 2px, 3px 100%;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const InteractiveModule = styled.section`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(88, 199, 243, 0.05);
  overflow: hidden;

  &.right-panel {
    background: rgba(88, 199, 243, 0.02);
  }

  /* Scanning line effect on hover */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 20%;
    background: linear-gradient(to bottom, transparent, rgba(88, 199, 243, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }

  &:hover {
    background: rgba(88, 199, 243, 0.06);
    &::before {
      opacity: 1;
      animation: ${scanline} 2s linear infinite;
    }
  }

  @media (max-width: 900px) {
    flex: 1;
    padding: 4rem 2rem;
  }
`;

export const ModuleContent = styled.div`
  width: 65%;
  z-index: 2;

  button {
    margin-top: 1rem;
    /* Optional: override action button colors to match the theme */
  }

  @media (max-width: 1200px) {
    width: 85%;
  }
`;

export const SystemTag = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: #58c7f3;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
  opacity: 0.8;

  svg {
    font-size: 1rem;
  }
`;