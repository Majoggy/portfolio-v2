import { breakpoints, colors, fonts } from '@/styles/utils';
import styled from 'styled-components';

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

  @media (min-width: ${breakpoints.ultrawide}) {
    flex-direction: column;
  }
`;

export const LinkItem = styled.li``;

export const Link = styled.a`
  color: ${colors.lightGray};
  font-family: ${fonts.body};
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  font-weight: 700;

  &:hover {
    color: ${colors.electricBlue};
  }

  @media (min-width: ${breakpoints.ultrawide}) {
    font-size: 1.25rem;
  }
`;
