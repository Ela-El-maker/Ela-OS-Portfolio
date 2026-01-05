import React from 'react';
import * as Styled from './ScrollHint.styles';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import { FiChevronDown } from 'react-icons/fi';

/**
 * Renders scroll hint component with a technical systems aesthetic
 * @function ScrollHint
 * @returns {JSX.Element} - Rendered ScrollHint component
 */
const ScrollHint = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.MouseTrack>
        <Styled.ScrollerDot />
      </Styled.MouseTrack>
      
      <PortfolioParagraph
        margin={'0'}
        paragraphText={'INIT_SCROLL_SEQUENCE'}
        withDarkColor={false}
        variant={'small'}
        withAnimatedPresence={true}
      />
      
      <Styled.IconWrapper>
        <FiChevronDown className={'icon'} />
      </Styled.IconWrapper>
    </Styled.Container>
  );
};

export default ScrollHint;