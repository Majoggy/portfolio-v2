import { colors, breakpoints, spacing, gradients } from '@/styles/utils';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 60%;
  margin-left: 40%;
  background: ${gradients.background};
  padding: ${spacing.xl};
  overflow-y: auto;
  min-height: 100vh;

  /* Auto-hide scrollbar */
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &:hover {
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
  }

  /* Webkit browsers (Chrome, Safari, Edge) */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 4px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    margin-left: 0;
    padding: ${spacing.lg};
  }

  @media (min-width: ${breakpoints.ultrawide}) {
    padding: ${spacing.xxl};
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;

export const ProjectCard = styled.div`
  background-color: ${colors.darkGray};
  border-radius: 0.5rem;
  padding: ${spacing.xl};
  min-height: 12.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlaceholderText = styled.p`
  color: ${colors.lightGray};
  font-size: 1.125rem;
  text-align: center;
`;
