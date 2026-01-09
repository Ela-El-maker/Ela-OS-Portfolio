import styled from 'styled-components';

export const ThirdSlideContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5% 10%;
  background-image: 
    linear-gradient(rgba(88, 199, 243, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(88, 199, 243, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;

  @media (max-width: 900px) {
    padding: 3rem 8%;
  }

  @media (max-width: 600px) {
    padding: 2.5rem 1.5rem;
  }
`;

export const RegistryHeader = styled.div`
  border-left: 3px solid #58c7f3;
  padding-left: 25px;
  margin-bottom: 3rem;
`;

export const ModuleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 2rem;
  align-items: start;

  @media (max-width: 600px) {
    gap: 1.5rem;
  }
`;


export const ModuleCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(88, 199, 243, 0.2);
  border-radius: 4px;
  padding: 1.25rem;
  position: relative;
  transition: all 0.3s ease;

  /* Masonry magic */
  grid-row: span auto;

  &:hover {
    border-color: #58c7f3;
    background: rgba(88, 199, 243, 0.05);
  }
`;


export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(88, 199, 243, 0.1);
  padding-bottom: 10px;

  h3 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.2rem;
    color: #fff;
    margin: 0;
  }

  .type {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.6rem;
    color: #58c7f3;
    opacity: 0.6;
  }
`;

export const ToolList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ToolRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(88, 199, 243, 0.15);

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;


export const IconSlot = styled.div`
  width: 64px;
  display: flex;
  justify-content: center;

  @media (max-width: 640px) {
    width: auto;
  }
`;

export const ToolMeta = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const ToolName = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  color: #e0f2ff;
  letter-spacing: 0.05em;
`;

export const ProficiencyBar = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(88, 199, 243, 0.15);
  border-radius: 999px;
  overflow: hidden;
`;

export const ProficiencyFill = styled.span<{ level: number }>`
  display: block;
  height: 100%;
  width: ${({ level }) => `${Math.min(Math.max(level, 0), 100)}%`};
  background: #58c7f3;
  box-shadow: 0 0 6px rgba(88, 199, 243, 0.9);
  transition: width 0.4s ease;
`;

export const ProficiencyValue = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  color: rgba(88, 199, 243, 0.8);
  min-width: 48px;
  text-align: right;

  @media (max-width: 640px) {
    text-align: left;
  }
`;

export const TerminalFooter = styled.div`
  position: absolute;
  bottom: 20px;
  right: 10%;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: rgba(88, 199, 243, 0.4);

  @media (max-width: 768px) {
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
`;
// Legacy icon grid removed in favor of textual list with proficiency bar.