import { shallow, mount } from 'enzyme';
import React from 'react';
import Loader from './Loader';
import * as Styled from './Loader.styles';

describe('Professional Loader Component', () => {
  const loadingDuration = 3000;

  it('should render the overlay when isOnScreen is true', () => {
    const wrapper = shallow(<Loader isOnScreen={true} loadingDuration={loadingDuration} />);
    expect(wrapper.find(Styled.Overlay).exists()).toBe(true);
  });

  it('should not display the overlay when isOnScreen is false', () => {
    const wrapper = shallow(<Loader isOnScreen={false} loadingDuration={loadingDuration} />);
    // Checking the prop passed to Styled.Overlay
    expect(wrapper.find(Styled.Overlay).prop('isOnScreen')).toBe(false);
  });

  it('should render exactly 20 progress bar segments', () => {
    const wrapper = shallow(<Loader isOnScreen={true} loadingDuration={loadingDuration} />);
    const segments = wrapper.find(Styled.Segment);
    expect(segments.length).toBe(20);
  });

  it('should render the technical spec overlay', () => {
    const wrapper = shallow(<Loader isOnScreen={true} loadingDuration={loadingDuration} />);
    expect(wrapper.find(Styled.SpecOverlay).exists()).toBe(true);
    expect(wrapper.find('.spec-item').length).toBe(3); // CPU, RAM, Ping
  });

  it('should update status text over time', (done) => {
    const wrapper = mount(<Loader isOnScreen={true} loadingDuration={loadingDuration} />);
    
    // Initial text
    expect(wrapper.find(Styled.StatusText).text()).toBe("Initializing...");

    // Fast-forward time to middle of duration
    setTimeout(() => {
      wrapper.update();
      const currentText = wrapper.find(Styled.StatusText).text();
      expect(currentText).not.toBe("Initializing...");
      done();
    }, loadingDuration / 2);
  });

  it('should have a glass card container for the UI', () => {
    const wrapper = shallow(<Loader isOnScreen={true} loadingDuration={loadingDuration} />);
    expect(wrapper.find(Styled.GlassCard).exists()).toBe(true);
  });
});