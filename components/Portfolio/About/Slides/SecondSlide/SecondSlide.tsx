import React from 'react';
import * as Styled from './SecondSlide.styles';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import Slide from '../../../Slide/Slide';
import ScrollHint from '../../../ScrollHint/ScrollHint';

const SecondSlide = (): JSX.Element => {
  return (
    <Slide bgColor="#05070a" height="100vh" anchorID="second-slide">
      <Styled.SecondSlideContainer className="page second-page">


        {/* New: Background Health Monitor */}
        <Styled.HealthMonitorOverlay>
          <div className="label">SYSTEM_LATENCY // 24ms</div>
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
            <polyline
              fill="none"
              stroke="rgba(88, 199, 243, 0.15)"
              strokeWidth="2"
              points="0,50 100,50 120,20 140,80 160,50 300,50 320,10 340,90 360,50 600,50 620,30 640,70 660,50 1000,50"
            />
          </svg>
        </Styled.HealthMonitorOverlay>

        
        <Styled.Column className="left-column">
          <Styled.MetricHeader>BLOCK_01 / INTERFACE_LAYER</Styled.MetricHeader>

          <SectionHeader
            variant="medium"
            headerText="UI_ENGINE"
            margin="0 0 2rem 0"
            color="#58c7f3"
          />

          <PortfolioParagraph
            margin="0"
            withDarkColor={false}
            variant="large"
            withAnimatedPresence
          >
            I design interface layers as stable contracts between users and
            backend systems. Using modern rendering strategies, I prioritize
            predictability, state integrity, and clear data boundaries so
            complexity stays where it belongs.
          </PortfolioParagraph>

          <Styled.TechList>
            <li>React Server Components</li>
            <li>TypeScript (Strict Mode)</li>
            <li>Design Systems & State Isolation</li>
          </Styled.TechList>
        </Styled.Column>

        <Styled.CentralDivider>
          <div className="line" />
          <div className="node">SYNC</div>
          <div className="line" />
        </Styled.CentralDivider>

        <Styled.Column className="right-column">
          <Styled.MetricHeader>BLOCK_02 / DATA_LAYER</Styled.MetricHeader>

          <SectionHeader
            variant="medium"
            headerText="DATA_CORE"
            margin="0 0 2rem 0"
            color="#58c7f3"
          />

          <PortfolioParagraph
            margin="0"
            withDarkColor={false}
            variant="large"
            withAnimatedPresence
          >
            On the backend, I design data models and execution paths that favor
            correctness under load. I focus on schema integrity, transactional
            safety, and predictable behavior across failure scenarios in
            production environments.
          </PortfolioParagraph>

          <Styled.TechList>
            <li>Relational Modeling & Migrations</li>
            <li>API Design (REST · GraphQL · gRPC)</li>
            <li>Node.js Runtime & Containerization</li>
          </Styled.TechList>
        </Styled.Column>
      </Styled.SecondSlideContainer>
      <ScrollHint />
    </Slide>
  );
};

export default SecondSlide;
