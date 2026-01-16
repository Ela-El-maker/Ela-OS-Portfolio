import React from 'react';
import * as Styled from './Acknowledgments.styles';
import Paragraph from '../Typography/Paragraph/Paragraph';
import { authors } from './Acknowledgments.config';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import WithSparkles from '../Portfolio/WithSparkles/WithSparkles';

const Acknowledgments = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.HeaderSection>
        <Styled.TerminalTitle>SYSTEM_CONTRIBUTORS.log</Styled.TerminalTitle>
        <Paragraph margin={'1.5rem 0'}>
          This project is a reflection of my passion for technology and my journey through life as Felo. My deepest gratitude goes to the people and communities whose work and contributions have shaped not only this project, but my growth, mindset, and love for building on the web. Their influence extends far beyond code — it lives in who I am and who I continue to become. Thank you.
        </Paragraph>
      </Styled.HeaderSection>

      <Styled.Grid>
        {authors.map((author, index) => (
          <Styled.AuthorCard key={author.id}>
            <Styled.CardDecor>
              <span className="index">0{index + 1}</span>
              <div className="line" />
            </Styled.CardDecor>
            
            <Styled.AuthorName>
              <WithSparkles color={'#00f2ff'}>{author.name}</WithSparkles>
            </Styled.AuthorName>

            <Styled.AcknowledgementText>
              {author.acknowledgement}
            </Styled.AcknowledgementText>

            <Styled.ActionArea>
              <Styled.IconLink href={author.url} target="_blank" rel="noopener" title="Portfolio">
                <FiExternalLink />
              </Styled.IconLink>
              
              {author.github && (
                <Styled.IconLink href={author.github} target="_blank" rel="noopener" title="GitHub">
                  <FiGithub />
                </Styled.IconLink>
              )}
            </Styled.ActionArea>
          </Styled.AuthorCard>
        ))}
      </Styled.Grid>
    </Styled.Container>
  );
};

export default Acknowledgments;