import React from 'react';
import * as Styled from './ThirdSlide.styles';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import Slide from '../../../Slide/Slide';
import SkillIcon from '../../../SkillIcon/SkillIcon';
import { useSystemsConfig } from '../../About.systems.config';
import ScrollHint from '../../../ScrollHint/ScrollHint';

const ThirdSlide = (): JSX.Element => {
  const { systemModules } = useSystemsConfig();
  const ICON_SIZE = { width: 42, height: 42 };

  return (
    <Slide bgColor={'#020408'} height={'100vh'} anchorID={'third-slide'}>
      <Styled.ThirdSlideContainer id={'third-slide'}>
        <Styled.RegistryHeader>
          <SectionHeader
            variant={'extraSmall'}
            headerText={'SYSTEM_STACK_REGISTRY'}
            margin={'0'}
            color={'#58c7f3'}
          />
          <PortfolioParagraph
            margin={'1rem 0 0 0'}
            paragraphText={'Inventory of validated system modules, tools, and operational metrics.'}
            withDarkColor={false}
            variant={'small'}
            withAnimatedPresence={true}
          />
        </Styled.RegistryHeader>

        <Styled.ModuleGrid>
          {systemModules.map((module) => (
            <Styled.ModuleCard key={module.id}>
              <Styled.CardHeader>
                <span className="type">{module.id}</span>
                <h3>{module.name}</h3>
              </Styled.CardHeader>

              <Styled.ToolList>
                {module.tools.map((tool) => (
                  <Styled.ToolRow key={tool.name}>
                    <Styled.IconSlot>
                      <SkillIcon
                        iconSrc={tool.iconSrc}
                        text={tool.name}
                        iconSize={ICON_SIZE}
                      />
                    </Styled.IconSlot>
                    <Styled.ToolMeta>
                      <Styled.ToolName>{tool.name}</Styled.ToolName>
                      <Styled.ProficiencyBar>
                        <Styled.ProficiencyFill level={tool.proficiency} />
                      </Styled.ProficiencyBar>
                    </Styled.ToolMeta>
                    <Styled.ProficiencyValue>
                      {tool.proficiency}%
                    </Styled.ProficiencyValue>
                  </Styled.ToolRow>
                ))}
              </Styled.ToolList>
            </Styled.ModuleCard>
          ))}
        </Styled.ModuleGrid>

        <Styled.TerminalFooter>
          TOTAL_MODULES: {systemModules.length} // SYSTEMS_ONLINE
        </Styled.TerminalFooter>
      </Styled.ThirdSlideContainer>
      <ScrollHint></ScrollHint>
    </Slide>
  );
};

export default ThirdSlide;