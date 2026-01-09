import styled, { keyframes, css } from 'styled-components';

// 1. Staggered "Spring" Fade In
const springFade = keyframes`
  0% { opacity: 0; transform: translateY(30px) scale(0.95); }
  70% { transform: translateY(-5px) scale(1.01); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

const pipeFlow = keyframes`
  0% { top: -20%; opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { top: 120%; opacity: 0; }
`;

const badgePulse = keyframes`
  0% { opacity: 0.8; }
  50% { opacity: 1; box-shadow: 0 0 10px currentColor; }
  100% { opacity: 0.8; }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10vh 12% 0 12%;
  min-height: 100vh;
  background-color: #020408;

  @media (max-width: 1024px) {
    padding: 8vh 8% 0;
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 6vh 1.5rem 0;
  }
`;

export const SystemTag = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: #58c7f3;
  letter-spacing: 4px;
  margin-bottom: 0.5rem;
  opacity: 0.7;

  @media ${({ theme }) => theme.media.phone} {
    font-size: 0.65rem;
    letter-spacing: 3px;
  }
`;

export const TimelineWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin-top: 4rem;

  .central-pipe {
    position: absolute;
    left: 7px; top: 0; bottom: 0;
    width: 2px;
    background: rgba(88, 199, 243, 0.1);
    
    .pipe-glow {
      position: absolute;
      width: 100%; height: 200px;
      background: linear-gradient(to bottom, transparent, #2bff88, transparent);
      animation: ${pipeFlow} 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    gap: 3rem;
  }

  @media ${({ theme }) => theme.media.phone} {
    margin-top: 3rem;

    .central-pipe {
      display: none;
    }
  }
`;

// Environment Badge Logic
export const EnvironmentBadge = styled.span<{ type: 'academic' | 'production' | 'independent' }>`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 4px;
  display: inline-block;
  margin-top: 0.5rem;
  border: 1px solid;
  letter-spacing: 1px;
  animation: ${badgePulse} 3s infinite ease-in-out;

  ${({ type }) => {
    switch (type) {
      case 'production':
        return css`
          color: #ffbd2e;
          background: rgba(255, 189, 46, 0.1);
          border-color: rgba(255, 189, 46, 0.3);
        `;
      case 'academic':
        return css`
          color: #58c7f3;
          background: rgba(88, 199, 243, 0.1);
          border-color: rgba(88, 199, 243, 0.3);
        `;
      case 'independent':
        return css`
          color: #2bff88;
          background: rgba(43, 255, 136, 0.1);
          border-color: rgba(43, 255, 136, 0.3);
        `;
    }
  }}
`;

export const Milestone = styled.article<{ variant: string }>`
  display: flex;
  gap: 3rem;
  position: relative;
  opacity: 0;
  
  /* Faster, springy staggered animation */
  ${({ variant }) => {
    const delays = { first: '0.1s', second: '0.25s', third: '0.4s' };
    return css`
      animation: ${springFade} 0.6s forwards;
      animation-delay: ${delays[variant as keyof typeof delays]};
    `;
  }}

  .node-point {
    width: 16px; height: 16px;
    background: #020408;
    border: 2px solid #58c7f3;
    border-radius: 50%;
    margin-top: 6px;
    z-index: 2;
    transition: all 0.3s ease;
  }

  &:hover .node-point {
    border-color: #2bff88;
    box-shadow: 0 0 15px #2bff88;
    transform: scale(1.2);
  }

  @media ${({ theme }) => theme.media.tablet} {
    gap: 2rem;
  }

  @media ${({ theme }) => theme.media.phone} {
    padding-left: 1.5rem;
    border-left: 1px solid rgba(88, 199, 243, 0.2);
    gap: 1.25rem;

    .node-point {
      position: absolute;
      left: 0;
      top: 0.5rem;
      margin-top: 0;
    }
  }
`;

export const MilestoneContent = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(88, 199, 243, 0.05);
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    background: rgba(88, 199, 243, 0.04);
    border-color: rgba(88, 199, 243, 0.4);
    transform: translateX(15px);
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 1.5rem;
  }

  @media ${({ theme }) => theme.media.phone} {
    padding: 1.25rem;

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.6;
    }
  }
`;

export const MilestoneHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h3 { font-size: 1.3rem; color: #fff; margin: 0; }
  time { font-family: 'JetBrains Mono', monospace; color: rgba(255,255,255,0.4); font-size: 0.85rem; }

  .status-tag {
    font-size: 0.6rem;
    font-family: 'JetBrains Mono', monospace;
    display: block;
    margin-bottom: 0.4rem;
    &.archived { color: rgba(255,255,255,0.3); }
    &.active { color: #2bff88; }
  }

  @media ${({ theme }) => theme.media.phone} {
    flex-direction: column;
    gap: 0.5rem;

    h3 {
      font-size: 1.15rem;
    }

    time {
      font-size: 0.8rem;
    }
  }
`;

export const Tags = styled.div`
  display: flex; gap: 0.8rem; margin-top: 1.5rem; flex-wrap: wrap;
  span {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    color: #58c7f3;
    border: 1px solid rgba(88, 199, 243, 0.2);
    padding: 3px 10px;
    border-radius: 4px;
    background: rgba(88, 199, 243, 0.05);
  }

  @media ${({ theme }) => theme.media.phone} {
    span {
      font-size: 0.6rem;
    }
  }
`;

export const FooterPadding = styled.div` padding: 8rem 0; display: flex; justify-content: center; `;