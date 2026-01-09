import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import WaveDivider, { WaveDividerProps } from './WaveDivider';
import * as Styled from './WaveDivider.styles';

/**
 * Setup function for the component
 * @param {WaveDividerProps} props - Component props
 * @returns {ShallowWrapper}
 */
const setup = (props: WaveDividerProps) => {
  return shallow(<WaveDivider {...props} />);
};

describe('WaveDivider Component', () => {
  const defaultProps: WaveDividerProps = {
    waveImg: '/cool/image.jpg',
    dividerHeight: '150px',
  };

  it('should render without throwing an error', () => {
    const wrap = setup(defaultProps);
    expect(wrap.exists()).toBe(true);
    expect(wrap.length).toBe(1);
  });

  it('should render the Styled Wave sub-component', () => {
    const wrap = setup(defaultProps);
    const divider = wrap.find(Styled.Wave);
    expect(divider.length).toBe(1);
  });

  it('should pass the correct props to the Styled Wave component', () => {
    const wrap = setup(defaultProps);
    const divider = wrap.find(Styled.Wave);

    expect(divider.prop('waveImg')).toBe(defaultProps.waveImg);
    expect(divider.prop('dividerHeight')).toBe(defaultProps.dividerHeight);
  });

  it('should apply the provided margin prop', () => {
    const margin = '2rem 0';
    const wrap = setup({ ...defaultProps, margin });
    const divider = wrap.find(Styled.Wave);
    expect(divider.prop('margin')).toBe(margin);
  });
});