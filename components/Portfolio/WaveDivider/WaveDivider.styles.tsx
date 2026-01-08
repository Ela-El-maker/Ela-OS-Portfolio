import styled from 'styled-components';
import { WaveDividerProps } from './WaveDivider';

export const Container = styled.div`
  width: 100%;
`;

export const Wave = styled.div<WaveDividerProps>`
  background-image: ${({ waveImg }) => `url(${waveImg})`};
  height: ${({ dividerHeight }) => dividerHeight || '200px'};
  margin: ${({ margin }) => margin || '0'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  
  /* Critical fix for sub-pixel rendering gaps */
  margin-bottom: -2px;
  position: relative;
  z-index: 2;

  @media ${({ theme }) => theme.media.phone} {
    height: 120px;
  }
`;