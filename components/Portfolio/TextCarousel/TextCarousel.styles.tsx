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
  gap: 1.5rem;
  min-height: 100%;
  padding: 1.5rem 1.25rem 2.5rem;
  background: linear-gradient(180deg, rgba(88, 199, 243, 0.04) 0%, transparent 65%);
  border-top: 1px solid rgba(88, 199, 243, 0.15);
  position: relative;
  z-index: 10;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 1.75rem 2rem 2.75rem;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: 1.5rem 5rem 3rem;
    background: linear-gradient(90deg, rgba(88, 199, 243, 0.02) 0%, transparent 100%);
    border-top: 0;
    border-left: 1px solid rgba(88, 199, 243, 0.1);
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
  border: 1px solid rgba(43, 255, 136, 0.35);
  border-radius: 999px;
  cursor: pointer;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;

  .carousel-icon {
    font-size: 1.4rem;
    color: #2bff88;
  }

  &:hover {
    background: rgba(43, 255, 136, 0.1);
    border-color: #2bff88;
    transform: scale(1.05);
    box-shadow: 0 0 12px rgba(43, 255, 136, 0.25);
  }

  &:active {
    transform: scale(0.92);
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 52px;
    height: 52px;

    .carousel-icon {
      font-size: 1.6rem;
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 55px;
    height: 55px;

    .carousel-icon {
      font-size: 1.8rem;
    }
  }
`;

export const ControlsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: stretch;
  margin-top: auto;
  padding: 0.9rem 1rem;
  background: rgba(10, 12, 16, 0.7);
  border: 1px solid rgba(88, 199, 243, 0.25);
  border-radius: 1rem;
  backdrop-filter: blur(6px);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.45);
  animation: ${slideTop} 0.5s both;
  position: static;
  z-index: 5;

  &::before {
    display: none;
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.85rem 1.5rem;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: auto;
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: row;
    align-items: center;
    gap: 20px;
    padding: 10px 30px;
    border-radius: 40px;
    background: rgba(10, 12, 16, 0.8);
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 40%;
      height: 1px;
      background: rgba(88, 199, 243, 0.2);
      top: 50%;
      left: 30%;
      z-index: -1;
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