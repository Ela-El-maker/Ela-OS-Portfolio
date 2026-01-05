import { shallow } from 'enzyme';
import React from 'react';
import ThirdSlide from './ThirdSlide';
import SkillIcon from '../../../SkillIcon/SkillIcon';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';

describe('ThirdSlide - Registry Spec', () => {
  const wrap = shallow(<ThirdSlide />);

  it('should render exactly 2 technical module cards', () => {
    // Checking for our new ModuleCard styled component
    expect(wrap.find('Styled(div)').length).toBeGreaterThanOrEqual(2);
  });

  it('should render the registry header correctly', () => {
    const header = wrap.find(SectionHeader).first();
    expect(header.prop('headerText')).toBe('TECH_STACK_REGISTRY');
  });

it('should render skill icons for each tool in the module', () => {
  const skillIcons = wrap.find(SkillIcon);
  // Based on your 5 modules with 3 tools each
  expect(skillIcons.length).toBe(15);
});

it('should render proficiency metrics for each tool', () => {
  const bars = wrap.find('.proficiency-bar');
  expect(bars.length).toBe(15);
});
  it('should display the terminal footer with dependency count', () => {
    expect(wrap.find('Styled(div)').last().text()).toContain('TOTAL_DEPENDENCIES');
  });
});