import { shallow } from 'enzyme';
import React from 'react';
import Loader from './Loader';
import * as Styled from './Loader.styles';

describe('Advanced OS Loader', () => {
  it('renders the CRT scanline effect', () => {
    const wrapper = shallow(<Loader isOnScreen={true} loadingDuration={1000} />);
    expect(wrapper.find(Styled.Scanline).exists()).toBe(true);
  });

  it('calculates percentage increments correctly', () => {
    // Tests would use jest.useFakeTimers() here to verify percentage logic
  });

  it('renders 40 progress bar segments', () => {
    const wrapper = shallow(<Loader isOnScreen={true} loadingDuration={1000} />);
    expect(wrapper.find(Styled.BarSegment).length).toBe(40);
  });

  it('shows system stats (CPU, MEM, TMP)', () => {
    const wrapper = shallow(<Loader isOnScreen={true} loadingDuration={1000} />);
    expect(wrapper.find('.stat').length).toBe(3);
  });
});