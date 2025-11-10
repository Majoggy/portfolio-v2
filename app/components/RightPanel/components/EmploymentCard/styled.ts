import { colors, fonts } from '@/styles/utils';
import styled from 'styled-components';

export const Card = styled.div`
  border-left: 2px solid ${colors.electricBlue};
  padding-left: 1.875rem;
  margin-bottom: 2.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -0.4375rem;
    top: 0;
    width: 0.6875rem;
    height: 0.6875rem;
    background: ${colors.electricBlue};
    border-radius: 50%;
  }
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  color: ${colors.lightGray};
  margin-bottom: 0.3125rem;
  font-weight: 600;
  font-family: ${fonts.heading};
`;

export const Company = styled.div`
  color: ${colors.electricBlue};
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3125rem;
  font-family: ${fonts.mono};
  letter-spacing: 0.5px;
`;

export const Period = styled.div`
  color: ${colors.mediumGray};
  font-size: 0.9rem;
  margin-bottom: 0.9375rem;
  font-family: ${fonts.body};
`;

export const Responsibilities = styled.ul`
  color: ${colors.mediumGray};
  margin-left: 1.25rem;
  list-style-type: disc;
`;

export const Responsibility = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.6;
  font-family: ${fonts.body};
`;

export const Description = styled.p`
  color: ${colors.mediumGray};
  margin-bottom: 0.9375rem;
  line-height: 1.7;
  font-family: ${fonts.body};
`;
