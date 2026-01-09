import styled, { keyframes, css } from 'styled-components';
import { slideTop } from '../../../design-system/reusableCss';

const pulse = keyframes`
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(43, 255, 136, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(43, 255, 136, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(43, 255, 136, 0); }
`;

export const StatusPulse = styled.div`
  width: 8px;
  height: 8px;
  background: #2bff88;
  border-radius: 50%;
  animation: ${pulse} 2s infinite;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  padding: 1.5rem 5rem 3rem;
  background: linear-gradient(90deg, rgba(88, 199, 243, 0.02) 0%, transparent 100%);
  border-left: 1px solid rgba(88, 199, 243, 0.1);
  position: relative;
  z-index: 10;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 2rem;
    border-left: none;
    border-top: 1px solid rgba(88, 199, 243, 0.15);
  }

  @media ${({ theme }) => theme.media.phone} {
    padding: 1.5rem 1rem 2.5rem;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  p {
    line-height: 1.8;
    font-family: 'Inter', sans-serif;
    max-width: 700px;
    color: rgba(255, 255, 255, 0.8);
  }

  h1 {
    font-family: 'JetBrains Mono', monospace;
    letter-spacing: 2px;
    font-weight: 500;
  }

  @media ${({ theme }) => theme.media.phone} {
    p {
      line-height: 1.6;
    }
  }
`;

const buttonStyles = css`
background: transparent;
  border: 1px solid rgba(43, 255, 136, 0.3);
  border-radius: 50%; /* Circular buttons */
  cursor: pointer;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
.carousel-icon {
    font-size: 1.8rem;
    color: #2bff88;
  }

&:hover {
    background: rgba(43, 255, 136, 0.1);
    border-color: #2bff88;
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(43, 255, 136, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }

  @media ${({ theme }) => theme.media.phone} {
    width: 44px;
    height: 44px;

    .carousel-icon {
      font-size: 1.4rem;
    }
  }
`;

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  margin-top: 3rem;
  animation: ${slideTop} 0.5s both;
  padding: 10px 30px;
  background: rgba(10, 12, 16, 0.8);
  border: 1px solid rgba(88, 199, 243, 0.2);
  border-radius: 40px;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

  &::before {
    content: '';
    position: absolute;
    width: 40%;
    height: 1px;
    background: rgba(88, 199, 243, 0.2);
    top: 50%;
    left: 30%;
    z-index: -1;
  }

  @media ${({ theme }) => theme.media.tablet} {
    position: static;
    transform: none;
    margin-top: 2rem;
    width: 100%;
    justify-content: space-between;
  }

  @media ${({ theme }) => theme.media.phone} {
    flex-direction: column;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 1rem;

    &::before {
      display: none;
    }
  }
`;

export const NextQuote = styled.button`${buttonStyles}`;
export const PrevQuote = styled.button`${buttonStyles}`;

export const Indicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  font-family: 'JetBrains Mono', monospace;
  text-align: center;

  span:first-child {
    font-size: 0.65rem;
    color: #58c7f3;
    letter-spacing: 1px;
  }

  span:last-child {
    font-size: 1rem;
    color: #fff;
    font-weight: 600;
    margin-top: 0.2rem;
  }

  @media ${({ theme }) => theme.media.phone} {
    min-width: auto;
    span:last-child {
      font-size: 0.95rem;
    }
  }
`;