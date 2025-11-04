import { breakpoints, colors, fonts, spacing } from '@/styles/utils';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40%;
  background-color: ${colors.deepNavy};
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
  }
`;

export const Name = styled.h1`
  color: ${colors.white};
  font-size: 4rem;
  font-family: ${fonts.heading};
  font-weight: 700;
  margin: 0 0 1rem 0;
  line-height: 4.6rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 3rem;
  }

  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: 2rem;
  }
`;

export const Title = styled.h2`
  color: ${colors.white};
  font-family: ${fonts.body};
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 0 1.5rem 0;
  opacity: 0.9;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 1rem;
`;

export const LinkItem = styled.li``;

export const Link = styled.a`
  color: ${colors.white};
  font-family: ${fonts.body};
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  font-weight: 700;
  // text-decoration: underline;

  &:hover {
    color: ${colors.electricBlue};
  }
`;

export const About = styled.p`
  color: ${colors.white};
  font-family: ${fonts.body};
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;
