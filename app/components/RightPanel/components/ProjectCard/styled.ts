import { breakpoints, colors, fonts, gradients, spacing, transitions } from '@/styles/utils';
import styled from 'styled-components';

export const Card = styled.div`
  background: ${gradients.card};
  border-radius: 1rem;
  padding: 3.125rem;
  transition: all ${transitions.slow};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0.3125rem 0.9375rem rgba(0, 0, 0, 0.4);
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.lg};
  }
`;

export const ProjectNumber = styled.div`
  font-family: ${fonts.mono};
  font-size: 0.875rem;
  color: ${colors.electricBlue};
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 2px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.775rem;
  }
`;

export const Title = styled.h2`
  font-family: ${fonts.heading};
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: ${colors.lightGray};
  letter-spacing: -1px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.75rem;
    line-height: 2.2rem;
  }
`;

export const Description = styled.p`
  font-family: ${fonts.body};
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${colors.mediumGray};
  margin-bottom: 1.875rem;
  font-weight: 400;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const TechStack = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.875rem;
`;

export const TechTag = styled.span`
  background: ${colors.techTagBg};
  color: ${colors.skyBlue};
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.8125rem;
  font-family: ${fonts.mono};
  font-weight: 500;
  border: 1px solid ${colors.techTagBorder};
  letter-spacing: 0.5px;
  transition: all ${transitions.normal};

  &:hover {
    background: rgba(96, 165, 250, 0.25);
    transform: translateY(-2px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.7rem;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const ProjectLink = styled.a`
  color: ${colors.electricBlue};
  text-decoration: none;
  font-family: ${fonts.body};
  font-weight: 500;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all ${transitions.normal};
  position: relative;

  &::after {
    content: '→';
    transition: transform ${transitions.normal};
  }

  &:hover {
    color: ${colors.skyBlue};
    transform: translateX(0.25rem);

    &::after {
      transform: translateX(0.25rem);
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.75rem;
  }
`;
