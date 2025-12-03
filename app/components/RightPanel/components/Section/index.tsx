import React from 'react';
import { SectionContent, SectionLabel, SectionTitle, SectionWrapper } from './styled';

interface Props {
  heading?: string;
  label?: string;
  children?: React.ReactNode;
  id?: string;
  mb?: string;
}

export const Section = ({ heading, label, children, id, mb }: Props) => {
  return (
    <SectionWrapper mb={mb || '6rem'} id={id}>
      {label && <SectionLabel>{label}</SectionLabel>}
      {heading && <SectionTitle>{heading}</SectionTitle>}
      <SectionContent>{children}</SectionContent>
    </SectionWrapper>
  );
};
