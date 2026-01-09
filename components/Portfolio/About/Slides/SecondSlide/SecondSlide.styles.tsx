import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 5px #58c7f3; }
  50% { box-shadow: 0 0 20px #58c7f3; }
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

  @media ${({ theme }) => theme.media.tablet} {
    height: 110px;
  }

  @media ${({ theme }) => theme.media.phone} {
    display: none;
  }
`;

// Update SecondSlideContainer to ensure content stays on top
export const SecondSlideContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 0 5%;
  align-items: center;
  position: relative;
  background-color: #05070a;
  overflow: hidden;

  /* Z-index management to keep text above the chart */
  & > * {
    position: relative;
    z-index: 1;
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    padding: 3rem 2rem;
    gap: 2rem;
    text-align: left;
    height: auto;
  }

  @media ${({ theme }) => theme.media.phone} {
    padding: 2.5rem 1.25rem 3rem;
  }
`;


export const Column = styled.div`
  width: 45%;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    padding: 1.5rem 0;
  }
`;

export const MetricHeader = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  color: rgba(88, 199, 243, 0.5);
`;


export const CentralDivider = styled.div`
  width: 10%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .line {
    width: 1px;
    flex-grow: 1;
    background: rgba(88, 199, 243, 0.2);
  }

  .node {
    padding: 10px;
    border: 1px solid #58c7f3;
    border-radius: 4px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.6rem;
    color: #58c7f3;
    animation: ${pulse} 2s infinite;
    margin: 20px 0;
  }

  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;


export const TechList = styled.ul`
  margin-top: 2rem;
  list-style: none;
  padding: 0;

  li {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    color: #58c7f3;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;

    &::before {
      content: ">";
      margin-right: 10px;
      opacity: 0.5;
    }
  }

  @media ${({ theme }) => theme.media.phone} {
    margin-top: 1.5rem;

    li {
      font-size: 0.75rem;
      line-height: 1.4;
    }
  }
`;