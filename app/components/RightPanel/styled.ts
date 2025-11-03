import { colors, breakpoints, spacing } from '@/styles/utils';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 60%;
  margin-left: 40%;
  background-color: ${colors.electricBlue};
  padding: ${spacing.xl};
  overflow-y: auto;
  min-height: 100vh;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    margin-left: 0;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ProjectCard = styled.div`
  background-color: ${colors.darkGray};
  border-radius: 8px;
  padding: ${spacing.xl};
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlaceholderText = styled.p`
  color: ${colors.lightGray};
  font-size: 18px;
  text-align: center;
`;
