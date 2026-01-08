import styled from 'styled-components';
import { WaveDividerProps } from './WaveDivider';

export const Container = styled.div`
  width: 100%;
`;

export const Wave = styled.div<WaveDividerProps>`
  background-image: ${({ waveImg }) => `url(${waveImg})`};
  height: ${({ dividerHeight }) => dividerHeight || '200px'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  
  /* Bleed the grid through the wave */
  opacity: 0.9; 
  backdrop-filter: blur(4px); 
  
  margin-bottom: -2px;
  position: relative;
  z-index: 2;
`;