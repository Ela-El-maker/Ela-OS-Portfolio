import React from 'react';
import * as Styled from './Logo.styles';

export interface Props {
  isExpanded: boolean;
}

const Logo = ({ isExpanded }: Props): JSX.Element => {
  return (
    <Styled.Container isExpanded={isExpanded}>
      <div className="logo-inner">
        <span className="brand">Ela</span>
        <span className="system-tag">OS</span>
      </div>
      {/* Invisible link for navigation */}
      <Styled.A href={'/portfolio'} />
      {/* The 'Power' indicator pulsates when the system is 'live' */}
      <div className="power-led" />
    </Styled.Container>
  );
};

export default Logo;