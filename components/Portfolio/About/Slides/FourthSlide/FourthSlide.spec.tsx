import { shallow } from 'enzyme';
import React from 'react';
import FourthSlide from './FourthSlide';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import * as Styled from './FourthSlide.styles';
import ScrollHint from '../../../ScrollHint/ScrollHint';

describe('FourthSlide - Diagnostics Spec', () => {
  const wrap = shallow(<FourthSlide />);

  it('should render correct technical diagnostic header', () => {
    const header = wrap.find(SectionHeader);
    expect(header.prop('headerText')).toBe('System Reliability & Recovery');
  });

  it('should render the diagnostic console visual on desktop', () => {
    expect(wrap.find(Styled.DiagnosticConsole).exists()).toBe(true);
  });

  it('should render the blinking cursor in the log', () => {
    expect(wrap.find(Styled.BlinkingCursor).exists()).toBe(true);
  });

  it('should render the ScrollHint at the bottom', () => {
  expect(wrap.find(ScrollHint).exists()).toBe(true);
});

it('should render the SVG data flow layer', () => {
  expect(wrap.find(Styled.DataFlowLines).exists()).toBe(true);
});

it('should render three tech satellites connected to the core', () => {
  expect(wrap.find(Styled.TechSatellite).length).toBe(3);
});
});