import React from 'react';
import * as Styled from './FifthSlide.styles';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import Slide from '../../../Slide/Slide';
import ScrollHint from '../../../ScrollHint/ScrollHint';

const FifthSlide = (): JSX.Element => {
  return (
    <Slide bgColor="#020408" height="auto" anchorID="fifth-slide">
      <Styled.Container>
        <header className="header-section">
          <Styled.SystemTag>HIGHLIGHTED_MILESTONES // EXPERIENCE_LOG</Styled.SystemTag>
          <SectionHeader
            variant="small"
            headerText="Professional & Practical Milestones"
            margin="0"
            color={'#58c7f3'}
          />
        </header>

        <Styled.TimelineWrapper>
          <div className="central-pipe" />

          {/* Daystar University */}
          <Styled.Milestone variant="first">
            <div className="node-point" />
            <Styled.MilestoneContent>
              <Styled.MilestoneHeader>
                <span className="status-tag archived">ARCHIVED</span>
                <h3>IT Support & Systems Exposure</h3>
                <time>Daystar University</time>
              </Styled.MilestoneHeader>
              <span className="company">ACADEMIC_ENVIRONMENT</span>
              <PortfolioParagraph variant="medium" withDarkColor={false} margin={''} withAnimatedPresence={false}>
                Provided hands-on technical support in an academic setting,
                troubleshooting operating system issues, software failures,
                network connectivity problems, and general workstation faults.
                This environment sharpened my diagnostic discipline and user
                communication skills.
              </PortfolioParagraph>
            </Styled.MilestoneContent>
          </Styled.Milestone>

          {/* BSA */}
          <Styled.Milestone variant="second">
            <div className="node-point" />
            <Styled.MilestoneContent>
              <Styled.MilestoneHeader>
                <span className="status-tag archived">ARCHIVED</span>
                <h3>Technical Operations & Support</h3>
                <time>BSA</time>
              </Styled.MilestoneHeader>
              <span className="company">PRODUCTION_ENVIRONMENT</span>
              <PortfolioParagraph variant="medium" withDarkColor={false} margin={''} withAnimatedPresence={false}>
                Supported internal systems and user devices in a structured
                organizational environment. Gained exposure to operational
                workflows, system reliability expectations, and maintaining
                uptime under real usage constraints.
              </PortfolioParagraph>
            </Styled.MilestoneContent>
          </Styled.Milestone>

          {/* Peer Repairs */}
          <Styled.Milestone variant="third">
            <div className="node-point" />
            <Styled.MilestoneContent>
              <Styled.MilestoneHeader>
                <span className="status-tag">ONGOING</span>
                <h3>Peer Device Repair & Troubleshooting</h3>
                <time>Ongoing</time>
              </Styled.MilestoneHeader>
              <span className="company">INDEPENDENT_PRACTICE</span>
              <PortfolioParagraph variant="medium" withDarkColor={false} margin={''} withAnimatedPresence={false}>
                Diagnosed and repaired fellow students’ laptops and desktops,
                handling hardware faults, OS corruption, driver issues, and
                performance degradation. This work built intuition around
                failure patterns and reinforced a systems-first mindset.
              </PortfolioParagraph>
            </Styled.MilestoneContent>
          </Styled.Milestone>
        </Styled.TimelineWrapper>

        <Styled.FooterPadding>
          <ScrollHint />
        </Styled.FooterPadding>
      </Styled.Container>
    </Slide>
  );
};

export default FifthSlide;
