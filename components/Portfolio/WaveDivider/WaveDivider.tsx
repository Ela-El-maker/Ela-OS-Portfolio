import React from 'react';
import * as Styled from './WaveDivider.styles';

export interface WaveDividerProps {
  waveImg: string;
  dividerHeight?: string; // Optional if you have a default in Styles
  margin?: string;
}

/**
 *Renders styled divider that can be inserted between section to create curved layout transitions
 *@function WaveDivider
 *@param {string} waveImg - image src for curved svg (wave)
 *@param {string} dividerHeight - height of the curved wave
 *@param {string} margin - margin to be applied to the divider
 *@returns {JSX.Element} - Rendered WaveDivider component
 */
const WaveDivider = ({
  waveImg,
  dividerHeight,
  margin,
}: WaveDividerProps): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.Wave
        waveImg={waveImg}
        dividerHeight={dividerHeight}
        margin={margin}
      />
    </Styled.Container>
  );
};

export default WaveDivider;
