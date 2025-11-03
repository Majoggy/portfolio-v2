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
  margin: 0 0 8px 0;
  line-height: 1.2;

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
  font-size: 20px;
  font-weight: 400;
  margin: 0 0 40px 0;
  opacity: 0.9;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LinkItem = styled.li`
  margin-bottom: 16px;

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const Link = styled.a`
  color: ${colors.white};
  font-family: ${fonts.body};
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.electricBlue};
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 15px;
  }
`;
