import React from 'react';
import styled from 'styled-components';

interface Props {
  heading: string;
  label: string;
  children: React.ReactNode;
  id?: string;
}

export const Section = ({ heading, label, children, id }: Props) => {
  return (
    <SectionWrapper id={id}>
      <SectionLabel>{label}</SectionLabel>
      <SectionTitle>{heading}</SectionTitle>
      <SectionContent>{children}</SectionContent>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  margin-bottom: 6.25rem;
  animation: fadeInUp 0.6s ease;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(1.875rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SectionLabel = styled.div`
  font-size: 0.9rem;
  color: #667eea;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: #ccd6f6;
`;

const SectionContent = styled.div`
  display: grid;
  gap: 2.5rem;
  max-width: 75rem;
`;
