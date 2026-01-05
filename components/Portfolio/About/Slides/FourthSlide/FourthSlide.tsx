import React from 'react';
import * as Styled from './FourthSlide.styles';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import Slide from '../../../Slide/Slide';
import Image from 'next/image';
import ScrollHint from '../../../ScrollHint/ScrollHint';

const FourthSlide = (): JSX.Element => {
  return (
    <Slide bgColor="#020408" height="130vh" anchorID="fourth-slide">
      <Styled.StickyWrapper>
        <Styled.Container>
          <div className="content-wrapper">
            <div className="text-section">
  <Styled.SystemTag>FIELD_OPERATIONS // DIAGNOSTIC_MODE</Styled.SystemTag>

  <SectionHeader
    variant="extraSmall"
    headerText="Hands-on Technical Experience"
    margin="0 0 2rem 0"
    color="#58c7f3"
  />

  {/* NEW: paragraph grid */}
  <Styled.ParagraphGrid>
    <PortfolioParagraph
      variant="small"
      withDarkColor={false}
      withAnimatedPresence
      margin="0"
    >
      My experience has been shaped through direct interaction with real
      systems, real users, and real failures. I’ve spent years diagnosing,
      repairing, and improving computing environments in academic,
      professional, and peer-driven settings.
    </PortfolioParagraph>

    <PortfolioParagraph
      variant="small"
      withDarkColor={false}
      withAnimatedPresence
      margin="0"
    >
      This foundation taught me how systems behave outside ideal
      conditions—when hardware degrades, software breaks, data is at risk,
      or users are blocked from doing their work. That exposure is what
      drives my focus on reliability, correctness, and maintainability.
    </PortfolioParagraph>
    <PortfolioParagraph
          margin="1.5rem 0 0"
          variant="small"
          withDarkColor={false}
          withAnimatedPresence
        >
          Rather than learning systems in isolation, my growth has come from
          observing failure patterns, tracing root causes, and applying fixes
          that restore trust in the system as a whole.
        </PortfolioParagraph>
  </Styled.ParagraphGrid>

  <Styled.InsightBadge>
    <span className="code-bracket">[</span>
    INTEGRITY_CHECK_PASSED
    <span className="code-bracket">]</span>
  </Styled.InsightBadge>
</div>


            <div className="visual-section">
              <Styled.SchematicContainer>
                {/* SVG Lines with staggered drawing animation */}
                <Styled.DataFlowLines viewBox="0 0 400 300">
                  <path d="M200,150 L320,50" className="line line-1" />
                  <path d="M200,150 L320,250" className="line line-2" />
                  <path d="M200,150 L80,250" className="line line-3" />
                </Styled.DataFlowLines>

                <Styled.CentralCore>
                  <div className="inner-node">CORE</div>
                </Styled.CentralCore>

                <Styled.TechSatellite className="sat-1">
                  <Image src={'/assets/portfolio/skills/cpp.svg'} alt="C++" width={40} height={40} />
                </Styled.TechSatellite>

                <Styled.TechSatellite className="sat-2">
                  <Image src={'/assets/portfolio/skills/laravel.svg'} alt="Laravel" width={40} height={40} />
                </Styled.TechSatellite>

                <Styled.TechSatellite className="sat-3">
                  <Image src={'/assets/portfolio/skills/rust.svg'} alt="Rust" width={40} height={40} />
                </Styled.TechSatellite>
              </Styled.SchematicContainer>

          <Styled.DiagnosticConsole>
            <Styled.LogContent>
              <div className="log-entry warn">12:00: [WARN] MEMORY_THRESHOLD at 78%</div>
              <div className="log-entry error">12:01: [CRIT] SEGMENTATION_FAULT isolated</div>
              <div className="log-entry info">12:01: [INFO] CORE_DUMP generated</div>
              <div className="log-entry success">12:02: [INFO] INTEGRITY_RESTORED</div>
              <div className="log-entry success">12:03: [OK] SYSTEM_STABLE</div>

              <Styled.BlinkingCursor />
            </Styled.LogContent>
          </Styled.DiagnosticConsole>

            </div>
          </div>
          
            <ScrollHint />
        </Styled.Container>
      </Styled.StickyWrapper>
    </Slide>
  );
};

export default FourthSlide;