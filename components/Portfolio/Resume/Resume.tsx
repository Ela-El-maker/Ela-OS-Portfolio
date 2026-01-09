import React from 'react';
import * as Styled from './Resume.styles';
import TextList from '../TextList/TextList';

import {
  keyTechSkills,
  otherSkills,
  professionalExperience,
} from './Resume.config';

import {
  FiDownload,
  FiGithub,
  FiMail,
  FiPhoneOutgoing,
} from 'react-icons/fi';
import { SiLinkedin } from 'react-icons/si';

import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import ProfessionalExperience from '../ProfessionalExperience/ProfessionalExperience';
import Link from 'next/link';

/**
 * Renders the professional resume component for Ela El-Maker
 * @function Resume
 * @returns {JSX.Element}
 */
const Resume = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.ResumeWrapper>
        {/* LEFT COLUMN */}
        <Styled.LeftColumn>
          <Styled.ContactInfo>
            <Styled.ContactLink href="https://github.com/Ela-El-maker" target="_blank">
              <FiGithub /> github.com/Ela-El-maker
            </Styled.ContactLink>
            <Styled.ContactLink href="mailto:felixeladi.office@gmail.com">
              <FiMail /> felixeladi.office@gmail.com
            </Styled.ContactLink>
            <p>Nairobi, Kenya 🇰🇪</p>
          </Styled.ContactInfo>

          <TextList variant="withHeader" textBulletPoints={keyTechSkills} headerText="Core Systems Skills" />
          <TextList variant="withHeader" textBulletPoints={otherSkills} headerText="Applied Infrastructure" />
        </Styled.LeftColumn>

        {/* RIGHT COLUMN */}
        <Styled.RightColumn>
          <Styled.SummaryHeader>
            <Styled.Name>Felix <span>Eladi</span></Styled.Name>
            <Styled.Title>Systems Engineer | Infrastructure & Low-Level Engineer</Styled.Title>

            <Styled.SocialLinksWrapper>
              <Styled.SocialMediaLink href="https://github.com/Ela-El-maker" target="_blank"><FiGithub className="social-media-icon" />GitHub</Styled.SocialMediaLink>
              <Styled.SocialMediaLink href="mailto:felixeladi.office@gmail.com"><FiMail className="social-media-icon" />Email</Styled.SocialMediaLink>
              <Styled.SocialMediaLink href="tel:+254769501328"><FiPhoneOutgoing className="social-media-icon" />+254 769 501 328</Styled.SocialMediaLink>
              <Styled.SocialMediaLink href="/assets/felix-eladi-cv.pdf" download><FiDownload className="social-media-icon" />Download CV</Styled.SocialMediaLink>
            </Styled.SocialLinksWrapper>

            <Styled.HR />

            <Styled.Summary>
              <Styled.ResumeHeader>Systems Manifesto</Styled.ResumeHeader>
              <PortfolioParagraph
                margin="0"
                paragraphText={`I am a systems engineer with hands-on expertise across hardware, networks, operating systems, and software infrastructure. I restore and optimize legacy systems, build resilient networks, and explore low-level software and kernel interactions. My work spans from salvaging and redeploying hundreds of devices to architecting secure, efficient systems. I thrive at the intersection of theory and practice: understanding how systems behave, fixing what’s broken, and building what works reliably. I continuously research and experiment to expand my footprint across domains, ensuring every project deepens my mastery and informs the next.
`}
                withDarkColor
                variant="medium"
                withAnimatedPresence={false}
              />
            </Styled.Summary>
          </Styled.SummaryHeader>

          <Styled.ResumeHeader>Systems Footprint</Styled.ResumeHeader>
          <Styled.ImpactGrid>
            <Styled.ImpactItem>
              <h4>Infrastructure</h4>
              <p>Campus-wide network ops, switches, access points, traffic visibility</p>
            </Styled.ImpactItem>
            <Styled.ImpactItem>
              <h4>Hardware</h4>
              <p>Component-level repair, disk recovery, memory & power diagnostics</p>
            </Styled.ImpactItem>
            <Styled.ImpactItem>
              <h4>Operating Systems</h4>
              <p>Windows internals, Linux deployment on legacy hardware, boot modes</p>
            </Styled.ImpactItem>
            <Styled.ImpactItem>
              <h4>Software Systems</h4>
              <p>Secure services, identity, backend architecture, low-level tooling</p>
            </Styled.ImpactItem>
          </Styled.ImpactGrid>


          <Styled.ResumeHeader>Professional Experience</Styled.ResumeHeader>
          {professionalExperience.map((experience, id) => (
            <ProfessionalExperience key={id} {...experience} />
          ))}

          <Styled.ResumeHeader>Current Focus</Styled.ResumeHeader>
          <Styled.Tags>
            <span>Compiler Theory</span>
            <span>OS Internals</span>
            <span>Memory Management</span>
            <span>Hardware Diagnostics</span>
            <span>Network Resilience</span>
          </Styled.Tags>

          <Styled.ResumeHeader>Formal Training</Styled.ResumeHeader>
          <Styled.EducationDetails>
            <h4>Diploma in ICT (2020–2022)</h4>
            <Styled.University>Daystar University, Kenya</Styled.University>
            <p>Completed ICT foundation program, including networking, systems, and programming.</p>

            <h4>B.Sc. Applied Computer Science (2022–2025)</h4>
            <Styled.University>Daystar University, Kenya</Styled.University>
            <p>Transitioned via Daystar’s bridge program; focused on software systems, infrastructure, and applied computing.</p>

            <p>Awaiting graduation for both programs at the end of 2026</p>
          </Styled.EducationDetails>

        </Styled.RightColumn>
      </Styled.ResumeWrapper>
    </Styled.Container>
  );
};

export default Resume;
