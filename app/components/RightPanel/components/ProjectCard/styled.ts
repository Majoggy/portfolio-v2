import { colors, fonts, gradients, transitions } from '@/styles/utils';
import styled from 'styled-components';

export const Card = styled.div`
  background: ${gradients.card};
  border-radius: 16px;
  padding: 50px;
  transition: all ${transitions.slow};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  }
`;

export const ProjectNumber = styled.div`
  font-family: ${fonts.mono};
  font-size: 14px;
  color: ${colors.electricBlue};
  margin-bottom: 16px;
  font-weight: 600;
  letter-spacing: 2px;
`;

export const Title = styled.h2`
  font-family: ${fonts.heading};
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${colors.offWhite};
  letter-spacing: -1px;
`;

export const Description = styled.p`
  font-family: ${fonts.body};
  font-size: 18px;
  line-height: 1.7;
  color: ${colors.mediumGray};
  margin-bottom: 30px;
  font-weight: 400;
`;

export const TechStack = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const TechTag = styled.span`
  background: ${colors.techTagBg};
  color: ${colors.skyBlue};
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-family: ${fonts.mono};
  font-weight: 500;
  border: 1px solid ${colors.techTagBorder};
  letter-spacing: 0.5px;
  transition: all ${transitions.normal};

  &:hover {
    background: rgba(96, 165, 250, 0.25);
    transform: translateY(-2px);
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 20px;
`;

export const ProjectLink = styled.a`
  color: ${colors.electricBlue};
  text-decoration: none;
  font-family: ${fonts.body};
  font-weight: 500;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all ${transitions.normal};
  position: relative;

  &::after {
    content: '→';
    transition: transform ${transitions.normal};
  }

  &:hover {
    color: ${colors.skyBlue};
    transform: translateX(4px);

    &::after {
      transform: translateX(4px);
    }
  }
`;
