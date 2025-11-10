import { breakpoints, colors, spacing } from '@/styles/utils';
import styled, { keyframes } from 'styled-components';

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(1.875rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SectionWrapper = styled.section`
  margin-bottom: 6.25rem;
  animation: ${fadeInUp} 0.6s ease;
`;

export const SectionLabel = styled.div`
  font-size: 0.9rem;
  color: ${colors.electricBlue};
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: ${colors.lightGray};
`;

export const SectionContent = styled.div`
  display: grid;
  gap: ${spacing.xl};

  @media (min-width: ${breakpoints.ultrawide}) {
    gap: ${spacing.xxl};
  }
`;
