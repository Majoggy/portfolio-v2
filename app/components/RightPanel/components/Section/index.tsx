import React from 'react';
import { SectionContent, SectionLabel, SectionTitle, SectionWrapper } from './styled';

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
