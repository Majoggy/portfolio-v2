import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query GetProjects {
    projects(sort: "order:desc") {
      title
      description
      liveLink
      gitHubLink
      order
      technologies {
        name
      }
    }
  }
`;

export const GET_EMPLOYMENT = gql`
  query GetEmployments {
    employments(sort: "startDate:desc") {
      title
      company
      startDate
      endDate
      responsibilities
      technologies {
        name
      }
    }
  }
`;

export const GET_LEFT_PANEL = gql`
  query GetLeftPanel {
    leftPanel {
      name
      jobTitle
      about
      link {
        label
        href
        isExternal
      }
    }
  }
`;
