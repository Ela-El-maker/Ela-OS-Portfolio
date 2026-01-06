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
            variant="extraSmall"
            headerText="Professional & Practical Milestones"
            margin="0"
            color={'#58c7f3'}
          />
        </header>

        <PortfolioParagraph
          margin="1.5rem 0 3rem 0"
          withDarkColor={false}
          variant="medium"
          withAnimatedPresence={false}
        >
          These milestones represent hands-on exposure to real systems in use.
          From academic environments to operational organizations and independent
          repair work, each phase reinforced a systems-first mindset built on
          diagnosis, responsibility, and reliability.
        </PortfolioParagraph>

        <Styled.TimelineWrapper>
          <div className="central-pipe">
            <div className="pipe-glow" />
          </div>

          {/* Daystar University */}
          <Styled.Milestone variant="first">
            <div className="node-point" />
            <Styled.MilestoneContent>
              <Styled.MilestoneHeader>
                <div className="left-meta">
                  <span className="status-tag archived">ARCHIVED</span>
                  <h3>IT Support & Systems Exposure</h3>
                </div>
                <time>2021 — 2022</time>
              </Styled.MilestoneHeader>
              <Styled.EnvironmentBadge type="academic">ACADEMIC_ENVIRONMENT</Styled.EnvironmentBadge>
              
              <PortfolioParagraph variant="small" withDarkColor={false} margin={'1rem 0'} withAnimatedPresence={false}>
                Provided technical support across student and institutional
              systems, troubleshooting software failures, OS issues, and
              hardware faults. Frequently diagnosed problems under time
              pressure, restoring systems to working state with minimal
              disruption.
              </PortfolioParagraph>

              <Styled.Tags>
                <span>System Troubleshooting</span>
                <span>OS Repair</span>
                <span>User Support</span>
              </Styled.Tags>
            </Styled.MilestoneContent>
          </Styled.Milestone>

          {/* BSA */}
          <Styled.Milestone variant="second">
            <div className="node-point" />
            <Styled.MilestoneContent>
              <Styled.MilestoneHeader>
                <div className="left-meta">
                  <span className="status-tag archived">ARCHIVED</span>
                  <h3>Technical Operations & Support</h3>
                </div>
                <time>2025 — 2026</time>
              </Styled.MilestoneHeader>
              <Styled.EnvironmentBadge type="production">PRODUCTION_ENVIRONMENT</Styled.EnvironmentBadge>
              
              <PortfolioParagraph variant="small" withDarkColor={false} margin={'1rem 0'} withAnimatedPresence={false}>
               Worked within structured organizational systems, supporting
              operational workflows and maintaining reliability across internal
              tooling. Gained exposure to professional delivery standards,
              accountability, and production expectations.
              </PortfolioParagraph>

              <Styled.Tags>
                <span>Operational Systems</span>
                <span>Process Reliability</span>
                <span>Professional Delivery</span>
              </Styled.Tags>
            </Styled.MilestoneContent>
          </Styled.Milestone>

          {/* Independent Repairs */}
          <Styled.Milestone variant="third">
            <div className="node-point" />
            <Styled.MilestoneContent>
              <Styled.MilestoneHeader>
                <div className="left-meta">
                  <span className="status-tag active">ONGOING</span>
                  <h3>Peer Device Repair & Recovery</h3>
                </div>
                <time>Continuous</time>
              </Styled.MilestoneHeader>
              <Styled.EnvironmentBadge type="independent">INDEPENDENT_PRACTICE</Styled.EnvironmentBadge>
              
              <PortfolioParagraph variant="small" withDarkColor={false} margin={'1rem 0'} withAnimatedPresence={false}>
                Diagnosed and repaired laptops for fellow students, handling
              hardware replacements, OS reinstalls, data recovery, and malware
              removal. Built a reputation for resolving issues others had
              abandoned.
              </PortfolioParagraph>

              <Styled.Tags>
                <span>Hardware Repair</span>
                <span>Data Recovery</span>
                <span>Fault Isolation</span>
              </Styled.Tags>
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