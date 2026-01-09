import styled, { keyframes } from 'styled-components';

const scanMove = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(500%); }
`;

const flicker = keyframes`
  0% { opacity: 0.97; }
  5% { opacity: 0.95; }
  10% { opacity: 0.9; }
  15% { opacity: 0.98; }
  20% { opacity: 0.92; }
  100% { opacity: 1; }
`;

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: #020408;
  overflow: hidden;
  animation: ${flicker} 0.15s infinite;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    padding: 2rem 0;
    gap: 2rem;
  }

  @media ${({ theme }) => theme.media.phone} {
    padding: 2rem 0 3rem;
  }
`;

export const CRTOverlay = styled.div`
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(
    rgba(18, 16, 16, 0) 50%, 
    rgba(0, 0, 0, 0.1) 50%
  ), linear-gradient(
    90deg, 
    rgba(255, 0, 0, 0.03), 
    rgba(0, 255, 0, 0.01), 
    rgba(0, 0, 255, 0.03)
  );
  background-size: 100% 3px, 3px 100%;
  pointer-events: none;
  z-index: 10;
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
  padding: 4rem 0;

  .scan-line {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100px;
    background: linear-gradient(to bottom, transparent, rgba(88, 199, 243, 0.05), transparent);
    opacity: 0;
    pointer-events: none;
  }

  &.right-panel {
    background: rgba(88, 199, 243, 0.01);
    border-left: 1px solid rgba(88, 199, 243, 0.1);
  }

  &:hover {
    background: rgba(88, 199, 243, 0.04);
    
    .scan-line {
      opacity: 1;
      animation: ${scanMove} 3s linear infinite;
    }

    /* Subtle zoom effect on hover */
    & > div {
      transform: scale(1.02);
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex: 1;
    border-left: none;
    border-bottom: 1px solid rgba(88, 199, 243, 0.1);
    padding: 3rem 0;
  }

  @media ${({ theme }) => theme.media.phone} {
    padding: 2.5rem 0;
  }
`;

export const ModuleContent = styled.div`
  width: 60%;
  z-index: 5;
  transition: transform 0.4s ease;

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 85%;
    padding: 3rem 0;
    text-align: center;
  }
    p {
      text-align: left;
      margin-left: auto;
      margin-right: auto;
      font-size: 0.95rem;
    }

    button {
      margin-left: auto;
      margin-right: auto;
    }
`;

@media ${ ({ theme }) => theme.media.phone } {
    h3 {
    font - size: 1.6rem;
  }

    p {
    font - size: 0.9rem;
  }
}

export const SystemTag = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: #58c7f3;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  letter-spacing: 2.5px;
  text-transform: uppercase;

  svg {
    font-size: 1.1rem;
    filter: drop-shadow(0 0 5px #58c7f3);
  }

  @media ${({ theme }) => theme.media.phone} {
    font-size: 0.65rem;
    letter-spacing: 2px;

    svg {
      font-size: 1rem;
    }
  }
`;