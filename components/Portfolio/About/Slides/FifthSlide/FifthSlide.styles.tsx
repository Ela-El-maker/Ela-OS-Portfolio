import styled, { keyframes, css } from 'styled-components';
import { slideInLeft, slideInRight } from '../../../../../design-system/reusableCss';

const glowPulse = keyframes`
  0% { box-shadow: 0 0 5px rgba(43, 255, 136, 0.2); }
  50% { box-shadow: 0 0 15px rgba(43, 255, 136, 0.6); }
  100% { box-shadow: 0 0 5px rgba(43, 255, 136, 0.2); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10vh 12% 0 12%;
  min-height: 100vh;
  
  .header-section {
    margin-bottom: 4rem;
  }
`;

export const SystemTag = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: #58c7f3;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
`;

export const TimelineWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-bottom: 10rem;

  .central-pipe {
    position: absolute;
    left: 7px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #2bff88, #58c7f3, transparent);
    opacity: 0.3;
  }
`;

interface MilestoneProps {
  variant: 'first' | 'second' | 'third' | 'fourth' | 'fifth';
}

export const Milestone = styled.article<MilestoneProps>`
  display: flex;
  gap: 2rem;
  position: relative;
  opacity: 0;
  
  /* Staggered Animations */
  ${({ variant }) => {
    const delays = { first: '0s', second: '0.4s', third: '0.8s', fourth: '1.2s', fifth: '1.6s' };
    return css`
      animation: ${slideInRight} 0.8s forwards;
      animation-delay: ${delays[variant]};
    `;
  }}

  .node-point {
    width: 16px;
    height: 16px;
    background: #020408;
    border: 2px solid #2bff88;
    border-radius: 50%;
    z-index: 2;
    margin-top: 5px;
    animation: ${glowPulse} 2s infinite;
  }
`;

export const MilestoneContent = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(88, 199, 243, 0.1);
  padding: 1.5rem;
  border-radius: 4px;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    border-color: #58c7f3;
    background: rgba(88, 199, 243, 0.05);
  }

  .company {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    color: #58c7f3;
    display: block;
    margin-top: 0.25rem;
  }
`;

export const MilestoneHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  h3 {
    font-size: 1.1rem;
    color: #fff;
    margin: 0;
  }

  time {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.4);
  }

  .status-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.6rem;
    padding: 2px 6px;
    border: 1px solid #2bff88;
    color: #2bff88;
    margin-right: 1rem;

    &.archived {
      border-color: rgba(255, 255, 255, 0.2);
      color: rgba(255, 255, 255, 0.4);
    }
  }
`;

export const FooterPadding = styled.div`
  padding: 5rem 0;
  display: flex;
  justify-content: center;
`;