import { breakpoints, colors, fonts, gradients, spacing } from '@/styles/utils';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40%;
  background: ${gradients.leftPanel};
  padding: ${spacing.xl};
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;

  @media (max-width: ${breakpoints.mobile}) {
    position: relative;
    width: 100%;
    height: auto;
    padding: ${spacing.lg};
  }

  @media (min-width: ${breakpoints.ultrawide}) {
    padding-left: ${spacing.xxl};
  }
`;

export const Name = styled.h1`
  color: ${colors.electricBlue};
  font-size: 4rem;
  font-family: ${fonts.heading};
  font-weight: 700;
  margin: 0 0 1rem 0;
  line-height: 4.6rem;

  @media (min-width: ${breakpoints.ultrawide}) {
    font-size: 4rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 3rem;
    line-height: 3rem;
  }

  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: 2.5rem;
  }
`;

export const Title = styled.h2`
  color: ${colors.lightGray};
  font-family: ${fonts.body};
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 0 1.5rem 0;
  opacity: 0.9;

  @media (min-width: ${breakpoints.ultrawide}) {
    font-size: 1.5rem;
  }
`;


export const About = styled.p`
  color: ${colors.lightGray};
  font-family: ${fonts.body};
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: ${breakpoints.ultrawide}) {
    max-width: 75%;
    font-size: 1.5rem;
  }
`;

export const MarkdownContent = styled.div`
  color: ${colors.lightGray};
  font-family: ${fonts.body};
  font-size: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: ${breakpoints.ultrawide}) {
    max-width: 75%;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: ${colors.electricBlue};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.skyBlue};
    }
  }

  strong {
    font-weight: 600;
    color: ${colors.lightGray};
  }

  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  code {
    font-family: ${fonts.mono};
    background: rgba(255, 255, 255, 0.05);
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-size: 0.9em;
  }

  pre {
    background: rgba(255, 255, 255, 0.05);
    padding: 1rem;
    border-radius: 5px;
    overflow-x: auto;
    margin: 1rem 0;

    code {
      background: none;
      padding: 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.lightGray};
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    font-weight: 600;

    &:first-child {
      margin-top: 0;
    }
  }

  blockquote {
    border-left: 3px solid ${colors.electricBlue};
    padding-left: 1rem;
    margin: 1rem 0;
    opacity: 0.9;
  }
`;
