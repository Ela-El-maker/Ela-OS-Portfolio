import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  background-color: #ffffff;
  color: ${({ theme }) => theme.portfolio.resumeColors.darkText};
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: initial;
  padding: 5rem 1rem;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 2rem 1rem;
    align-items: flex-start;
  }

  @media ${({ theme }) => theme.media.phone} {
    padding: 1.5rem 0.75rem;
  }
`;

export const ResumeWrapper = styled.div`
  background-color: ${({ theme }) => theme.portfolio.resumeColors.bgColor};
  padding: 3rem;
  max-width: 1100px;
  width: 100%;
  display: flex;
  gap: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    padding: 1.5rem;
    gap: 2rem;
  }

   @media ${({ theme }) => theme.media.phone} {
    padding: 1.25rem;
    gap: 1.5rem;
    box-shadow: none;
  }
`;

/**
 * LEFT COLUMN (Sidebar)
 */
export const LeftColumn = styled.aside`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  h3 {
    color: ${({ theme }) => theme.portfolio.resumeColors.accentColor};
    font-size: 1.1rem;
    letter-spacing: 1px;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }

  @media ${({ theme }) => theme.media.phone} {
    gap: 2rem;
  }
`;

export const ContactInfo = styled.address`
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.9rem;

  p {
    margin: 0;
    font-weight: 500;
  }

  @media ${({ theme }) => theme.media.phone} {
    font-size: 0.85rem;
  }
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: opacity 0.2s ease;
  color: ${({ theme }) => theme.portfolio.resumeColors.accentColor};

  &:hover {
    opacity: 0.7;
  }
`;

/**
 * RIGHT COLUMN (Main Content)
 */
export const RightColumn = styled.section`
  width: 70%;

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }
`;

export const SummaryHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Name = styled.h1`
  font-size: 3.5rem;
  letter-spacing: -2px;
  margin: 0;
  line-height: 1;
  text-transform: uppercase;

  span {
    color: ${({ theme }) => theme.portfolio.resumeColors.accentColor};
  }

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 2.5rem;
  }

  @media ${({ theme }) => theme.media.phone} {
    font-size: 2.2rem;
    letter-spacing: -1px;
  }
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.portfolio.resumeColors.lightText};

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 1.1rem;
  }

  @media ${({ theme }) => theme.media.phone} {
    font-size: 1rem;
  }
`;

export const Summary = styled.div`
  margin: 1rem 0;

  /* Tighten spacing for the "Systems Manifesto" header inside the summary */
  h3 {
    margin: 0.5rem 0 0.75rem 0;
  }

  @media ${({ theme }) => theme.media.phone} {
    margin: 0.75rem 0;
  }
`;

export const SocialLinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;

  @media ${({ theme }) => theme.media.tablet} {
    gap: 1rem;
  }

  @media ${({ theme }) => theme.media.phone} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

export const SocialMediaLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  color: #333;
  transition: transform 0.2s ease;

  .social-media-icon {
    color: ${({ theme }) => theme.portfolio.resumeColors.accentColor};
    margin-right: 0.4rem;
    font-size: 1.1rem;
  }

  &:hover {
    transform: translateY(-2px);
  }

  @media ${({ theme }) => theme.media.phone} {
    font-size: 0.9rem;

    .social-media-icon {
      font-size: 1rem;
    }
  }
`;

export const ResumeHeader = styled.h3`
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 2.5rem 0 1rem 0;
  padding-bottom: 0.25rem;
  border-bottom: 2px solid ${({ theme }) => theme.portfolio.resumeColors.accentColor};
  display: inline-block;
  color: ${({ theme }) => theme.portfolio.resumeColors.accentColor};

  @media ${({ theme }) => theme.media.tablet} {
    margin: 2rem 0 0.75rem 0;
    font-size: 1rem;
  }

  @media ${({ theme }) => theme.media.phone} {
    margin: 1.5rem 0 0.5rem 0;
    font-size: 0.95rem;
    letter-spacing: 1.5px;
  }
`;

export const EducationDetails = styled.div`
  margin-bottom: 1.5rem;

  h4 {
    display: flex;
    justify-content: space-between;
    margin: 0;
    font-size: 1.1rem;
    color: #222;
  }

  span {
    color: ${({ theme }) => theme.portfolio.resumeColors.lightText};
    font-size: 0.9rem;
  }

  @media ${({ theme }) => theme.media.phone} {
    h4 {
      font-size: 1rem;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const University = styled.p`
  color: ${({ theme }) => theme.portfolio.resumeColors.accentColor};
  font-weight: 600;
  margin: 0.25rem 0;
  font-size: 0.95rem;
`;

export const Projects = styled.div`
  background: #f9f9f9;
  padding: 1rem;
  border-left: 4px solid ${({ theme }) => theme.portfolio.resumeColors.accentColor};
  font-size: 0.95rem;

  a {
    color: ${({ theme }) => theme.portfolio.resumeColors.accentColor};
    text-decoration: none;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const HR = styled.hr`
  border: 0;
  border-top: 1px solid #eee;
  margin: 0.75rem 0;
`;

export const Quote = styled.blockquote`
  font-style: italic;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.portfolio.resumeColors.lightText};
  border-left: 3px solid ${({ theme }) => theme.portfolio.resumeColors.accentColor};
  padding-left: 1rem;
  margin: 1.5rem 0;
`;
export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    background: #eee;
    padding: 0.4rem 0.7rem;
    font-size: 0.8rem;
    border-radius: 20px;
  }

  @media ${({ theme }) => theme.media.phone} {
    gap: 0.4rem;

    span {
      font-size: 0.75rem;
      padding: 0.35rem 0.6rem;
    }
  }
`;
export const ArchitectureList = styled.ul`
  padding-left: 1.2rem;
  margin-bottom: 2rem;

  li {
    margin-bottom: 0.6rem;
    font-size: 0.95rem;
  }
`;
export const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media ${({ theme }) => theme.media.tablet} {
    gap: 1.25rem;
  }

  @media ${({ theme }) => theme.media.phone} {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const ImpactItem = styled.div`
  background: #f8f8f8;
  padding: 1rem;
  border-radius: 6px;

  h4 {
    font-size: 1.8rem;
    margin: 0;
    color: ${({ theme }) => theme.portfolio.resumeColors.accentColor};
  }

  p {
    margin: 0.25rem 0 0;
    font-size: 0.9rem;
  }

  @media ${({ theme }) => theme.media.phone} {
    padding: 0.85rem;

    h4 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;
