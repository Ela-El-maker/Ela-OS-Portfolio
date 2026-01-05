import React from 'react';
import { shallow } from 'enzyme';
import FirstSlide from './FirstSlide';
import * as Styled from './FirstSlide.styles';

describe('FirstSlide – Terminal UI', () => {
  const wrapper = shallow(<FirstSlide />);

  it('renders the terminal container', () => {
    expect(wrapper.find(Styled.TerminalContainer).exists()).toBe(true);
  });

  it('renders the main system title', () => {
    expect(wrapper.find(Styled.GlitchTitle).text()).toBe('FELO_SYSTEMS');
  });

  it('displays core system logs', () => {
    const logs = wrapper.find(Styled.LogTable).text();
    expect(logs).toContain('DISTRIBUTED_SYSTEMS');
    expect(logs).toContain('MYSQL');
  });

  it('renders the visual data pane', () => {
    expect(wrapper.find(Styled.VisualDataPane).exists()).toBe(true);
    expect(wrapper.find(Styled.GridBox).exists()).toBe(true);
  });

  it('highlights the primary tech stack', () => {
    const highlights = wrapper.find('.highlight');
    expect(highlights.first().text()).toBe('Prisma ORM');
  });

  it('should render the system version tag with the pulse indicator', () => {
    const tag = wrapper.find(Styled.SystemTag);

    expect(tag.exists()).toBe(true);
    expect(tag.text()).toContain('ALGORITHM_V1.0.4');
    expect(tag.find('.pulse-dot').exists()).toBe(true);
  });
});
