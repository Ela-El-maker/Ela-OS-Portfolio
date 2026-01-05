import styled, { keyframes } from 'styled-components';

const scrollAnimation = keyframes`
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(12px); opacity: 0; }
`;

const pulse = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

export const MouseTrack = styled.div`
  width: 22px;
  height: 38px;
  border: 1px solid rgba(88, 199, 243, 0.4);
  border-radius: 12px;
  position: relative;
  background: rgba(88, 199, 243, 0.05);
`;

export const ScrollerDot = styled.div`
  width: 2px;
  height: 6px;
  background: #58c7f3;
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 5px #58c7f3;
  animation: ${scrollAnimation} 1.5s infinite ease-in-out;
`;

export const IconWrapper = styled.div`
  color: #58c7f3;
  font-size: 1.2rem;
  animation: ${pulse} 2s infinite ease-in-out;
  opacity: 0.6;
`;