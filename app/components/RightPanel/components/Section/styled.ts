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

export const SectionWrapper = styled.section<{ mb: string }>`
  margin-bottom: ${(p) => p.mb};
  animation: ${fadeInUp} 0.6s ease;
  scroll-margin-top: 3.75rem;
`;

export const SectionLabel = styled.div`
  font-size: 0.9rem;
  color: ${colors.electricBlue};
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 2rem;
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
