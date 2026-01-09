import { shallow } from 'enzyme';
import React from 'react';
import Resume from './Resume';
import * as Styled from './Resume.styles';
import { FiGithub, FiMail, FiPhoneOutgoing } from 'react-icons/fi';
import TextList from '../TextList/TextList';
import ProfessionalExperience from '../ProfessionalExperience/ProfessionalExperience';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<Resume />);
};

describe('Resume Component', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap.length).toBe(1);
  });

  describe('Left Column (Sidebar)', () => {
    it('should render the left column aside section', () => {
      const leftColumn = wrap.find(Styled.LeftColumn);
      expect(leftColumn.length).toBe(1);
    });

    it('should render the contact info section', () => {
      const contactInfo = wrap.find(Styled.ContactInfo);
      expect(contactInfo.length).toBe(1);
    });

    it('should render the correct contact icons (GitHub, Mail)', () => {
      // Checking for the presence of specific system-focused contact icons
      expect(wrap.find(FiGithub).length).toBe(1);
      expect(wrap.find(FiMail).length).toBe(2); // One in sidebar, one in social links
    });

    it('should render two skill lists (Core Systems & Applied Infrastructure)', () => {
      const leftColumn = wrap.find(Styled.LeftColumn);
      const lists = leftColumn.find(TextList);
      expect(lists.length).toBe(2);
    });
  });
  describe('Resume Component', () => {
    const wrap = setup();

    it('should render 4 key professional experiences', () => {
      const professionalExp = wrap.find(ProfessionalExperience);
      expect(professionalExp.length).toBe(4);
    });

    it('should render 1 education detail (Daystar University)', () => {
      const edDetails = wrap.find(Styled.EducationDetails);
      expect(edDetails.length).toBe(1);
    });

    it('should display the correct Systems-focused title', () => {
      const title = wrap.find(Styled.Title);
      expect(title.text()).toContain('Systems Architect');
    });
  });

  describe('Right Column (Content)', () => {
    it('should render the summary section with the correct Name', () => {
      const summary = wrap.find(Styled.Summary);
      expect(summary.length).toBe(1);

      const name = wrap.find(Styled.Name);
      expect(name.text()).toContain('Ela');
    });

    it('should display the high-leverage Systems Architect title', () => {
      const title = wrap.find(Styled.Title);
      expect(title.text()).toEqual('Systems Architect | High-Resilience Infrastructure Engineer');
    });

    it('should render exactly 5 social/action links (LinkedIn, GitHub, Email, Phone, Download)', () => {
      const socialMediaLinks = wrap.find(Styled.SocialMediaLink);
      expect(socialMediaLinks.length).toBe(5);
    });

    it('should render the 3 key professional experiences (Independent, BSA, Daystar)', () => {
      const professionalExp = wrap.find(ProfessionalExperience);
      expect(professionalExp.length).toBe(3);
    });

    it('should render the projects redirection section', () => {
      const projectsSection = wrap.find(Styled.Projects);
      expect(projectsSection.length).toBe(1);
    });

    it('should render 1 education detail (Daystar University)', () => {
      const edDetails = wrap.find(Styled.EducationDetails);
      expect(edDetails.length).toBe(1);
    });
  });
});