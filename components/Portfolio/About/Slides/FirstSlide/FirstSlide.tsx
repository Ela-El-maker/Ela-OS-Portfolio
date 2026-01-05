import React from 'react';
import * as Styled from './FirstSlide.styles';
import Slide from '../../../Slide/Slide';
import ScrollHint from '../../../ScrollHint/ScrollHint';

const FirstSlide = (): JSX.Element => {
  return (
    <Slide bgColor="#020408" height="100vh" anchorID="first-slide">
      <Styled.TerminalContainer id="first-slide">
        <Styled.MainContent>
          <Styled.TagWrapper>
            <Styled.SystemTag>
              <span className="pulse-dot" /> 
              SYSTEM_VERSION // ALGORITHM_V1.0.4
            </Styled.SystemTag>
          </Styled.TagWrapper>

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

          <Styled.GlitchTitle data-text="FELO_SYSTEMS">
            FELO_SYSTEMS
          </Styled.GlitchTitle>

          <Styled.Description>
            Systems-focused software engineer designing resilient backend platforms
            and distributed data pipelines. Experienced in owning the full lifecycle
            from data modeling and execution logic to deployment, observability,
            and failure recovery across constrained environments.
          </Styled.Description>

          <Styled.LogTable>
          <div className="log-row">
            <span className="key">ROLE</span>
            <span className="value">SYSTEMS / BACKEND ENGINEER</span>
          </div>
          <div className="log-row">
            <span className="key">CORE_FOCUS</span>
            <span className="value">DISTRIBUTED SYSTEMS · DATA RELIABILITY</span>
          </div>
          <div className="log-row">
            <span className="key">DATA_LAYER</span>
            <span className="value">MYSQL · PRISMA · SCHEMA DESIGN</span>
          </div>
          <div className="log-row">
            <span className="key">STATUS</span>
            <span className="value success">PRODUCTION-ORIENTED</span>
          </div>
        </Styled.LogTable>

        </Styled.MainContent>

        <Styled.VisualDataPane>
          <Styled.GridBox />
          <Styled.ScrollTextContainer>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="scroll-line">
                SECURE_LINK_ESTABLISHED_PORT_{8000 + i}
              </div>
            ))}
          </Styled.ScrollTextContainer>
        </Styled.VisualDataPane>
      </Styled.TerminalContainer>
      <ScrollHint />
    </Slide>
  );
};

export default FirstSlide;
