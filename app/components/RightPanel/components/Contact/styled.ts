import { breakpoints, colors, gradients, spacing, transitions } from '@/styles/utils';
import styled from 'styled-components';

export const ContactGrid = styled.div`
  display: flex;
  gap: ${spacing.md};
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${breakpoints.smallMobile}) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const ContactCard = styled.a`
  background: ${gradients.contactCard};
  border-radius: 1rem;
  padding: ${spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all ${transitions.slow};
  cursor: pointer;
  flex: 1 1 0;
  aspect-ratio: 1;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.4);
  }

  @media (max-width: ${breakpoints.smallMobile}) {
    flex: 0 0 8rem;
    max-width: 8rem;

    &:first-child {
      flex-basis: 100%;
    }
  }
`;

export const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${transitions.normal};

  svg {
    width: 100%;
    height: 100%;
    transition: all ${transitions.normal};
  }

  ${ContactCard}:hover & svg {
    fill: ${colors.skyBlue};
    transform: scale(1.1);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
