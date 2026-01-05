import { shallow } from 'enzyme';
import React from 'react';
import SecondSlide from './SecondSlide';
import * as Styled from './SecondSlide.styles';

describe('SecondSlide - Architecture Spec', () => {
  const wrap = shallow(<SecondSlide />);
  
it('should render the background system health monitor', () => {
  const monitor = wrap.find(Styled.HealthMonitorOverlay);
  expect(monitor.exists()).toBe(true);
  expect(monitor.find('.label').text()).toContain('SYSTEM_LATENCY');
});

it('should render the technical heartbeat SVG', () => {
  expect(wrap.find('svg').length).toBeGreaterThan(0);
});


  it('should render the two technical columns', () => {
    expect(wrap.find('.left-column').exists()).toBe(true);
    expect(wrap.find('.right-column').exists()).toBe(true);
  });

  it('should display UI_ENGINE and DATA_CORE headers', () => {
    const headers = wrap.find('SectionHeader');
    expect(headers.at(0).prop('headerText')).toBe('UI_ENGINE');
    expect(headers.at(1).prop('headerText')).toBe('DATA_CORE');
  });

  it('should render the central sync node', () => {
    expect(wrap.find('.node').text()).toBe('SYNC');
  });

  it('should list specific technical competencies', () => {
    expect(wrap.find(Styled.TechList).length).toBe(2);
  });

  it('should express interface and data responsibilities', () => {
  const text = wrap.text();
  expect(text).toContain('interface');
  expect(text).toContain('data');
});

});