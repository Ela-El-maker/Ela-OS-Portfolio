import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #000000; /* Spotify's base color */
  padding: 1rem;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AlbumArt = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin-bottom: 2rem;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    z-index: 2;
    position: relative;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }
`;

export const VinylRecord = styled.div<{ isPlaying: boolean }>`
  position: absolute;
  top: 0;
  right: -50px;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, #333 20%, #111 21%, #111 100%);
  border-radius: 50%;
  z-index: 1;
  transition: right 0.5s ease;
  ${props => props.isPlaying && css`
    right: -80px;
    animation: ${rotate} 3s linear infinite;
  `}
`;

export const TrackInfo = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  h2 { margin: 0; font-size: 1.5rem; color: #2bff88; }
  p { margin: 5px 0 0; opacity: 0.7; }
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8rem;
  margin-bottom: 2rem;
`;

export const ProgressBar = styled.div`
  flex: 1;
  height: 4px;
  background: rgba(255,255,255,0.1);
  border-radius: 2px;
`;

export const ProgressFill = styled.div<{ width: string }>`
  width: ${props => props.width};
  height: 100%;
  background: #2bff88;
  border-radius: 2px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  button {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover { color: #2bff88; }
  }
`;

export const PlayButton = styled.button`
  width: 60px;
  height: 60px;
  background: #2bff88 !important;
  color: #000 !important;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  &:hover { transform: scale(1.1); }
`;

export const VolumeBar = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  opacity: 0.6;
  input { accent-color: #2bff88; flex: 1; }
`;



export const IframeWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  background: #121212;
`;

export const FooterNote = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0.5rem 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: #2bff88;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.8;

  .status-dot {
    width: 6px;
    height: 6px;
    background-color: #2bff88;
    border-radius: 50%;
    box-shadow: 0 0 8px #2bff88;
  }
`;