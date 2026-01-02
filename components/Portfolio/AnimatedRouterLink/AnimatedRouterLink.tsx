import React, { useRef } from 'react';
import * as Styled from './AnimatedRouterLink.styles';
import useHover from '../../../hooks/useHover';

export interface Props {
  variant: 'standard' | 'highlight';
  text: string;
  hoverText: string;
  href: string;
  animationTimeout: number;
}

/**
 *Renders animated router link
 *@function AnimatedRouterLink
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const AnimatedRouterLink = ({
  variant,
  href,
  text,
  hoverText,
  animationTimeout,
}: Props): JSX.Element => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const isHovering = useHover(linkRef);

  return (
    <Styled.A
      href={href}
      ref={linkRef}
      variant={variant}
      animationTimeout={animationTimeout}
    >
      {isHovering ? hoverText : text}
    </Styled.A>
  );
};

export default AnimatedRouterLink;
