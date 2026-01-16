import styled from 'styled-components';

export const Container = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'JetBrains Mono', monospace;
`;

export const HeaderSection = styled.div`
  border-left: 3px solid #00f2ff;
  padding-left: 20px;
  margin-bottom: 3rem;
`;

export const TerminalTitle = styled.h2`
  color: #00f2ff;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const AuthorCard = styled.article`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 242, 255, 0.1);
  padding: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    background: rgba(0, 242, 255, 0.05);
    border-color: rgba(0, 242, 255, 0.4);
    transform: translateY(-5px);
  }
`;

export const CardDecor = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
  
  .index {
    font-size: 0.7rem;
    color: #00f2ff;
    opacity: 0.6;
  }

  .line {
    height: 1px;
    flex: 1;
    background: rgba(0, 242, 255, 0.2);
  }
`;

export const AuthorName = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  color: #fff;
`;

export const AcknowledgementText = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  flex: 1;
  margin-bottom: 1.5rem;
`;

export const ActionArea = styled.div`
  display: flex;
  gap: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 1rem;
`;

export const IconLink = styled.a`
  color: rgba(0, 242, 255, 0.6);
  font-size: 1.2rem;
  transition: color 0.2s;

  &:hover {
    color: #00f2ff;
  }
`;