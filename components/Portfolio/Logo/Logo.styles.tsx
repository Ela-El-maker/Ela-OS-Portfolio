import styled, { keyframes, css } from 'styled-components';

const pulse = keyframes`
  0% { opacity: 0.4; box-shadow: 0 0 5px #33ff33; }
  50% { opacity: 1; box-shadow: 0 0 15px #33ff33; }
  100% { opacity: 0.4; box-shadow: 0 0 5px #33ff33; }
`;

export const Container = styled.div<{ isExpanded: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  .logo-inner {
    display: flex;
    align-items: baseline;
    font-family: 'Fira Code', monospace; /* Best for 'OS' vibes */
    font-weight: 700;
    font-size: ${props => props.isExpanded ? '2.5rem' : '1.5rem'};
    letter-spacing: -1px;
    transition: all 0.5s ease;
  }

  .brand {
    color: #ffffff;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }

  .system-tag {
    background: #33ff33;
    color: #000;
    padding: 0 6px;
    margin-left: 4px;
    font-size: 0.6em;
    border-radius: 2px;
    transform: translateY(-2px);
    display: inline-block;
  }

  .power-led {
    position: absolute;
    bottom: -15px;
    width: 6px;
    height: 6px;
    background: #33ff33;
    border-radius: 50%;
    animation: ${pulse} 2s infinite ease-in-out;
    opacity: ${props => props.isExpanded ? 1 : 0};
  }
`;

export const A = styled.a`
  position: absolute;
  inset: 0;
  z-index: 2;
`;