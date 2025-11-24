import { gql } from '@apollo/client';

export const GET_PORTFOLIO_DATA = gql`
  query GetPortfolioData {
    portfolio {
      name
      jobTitle
      about
      link {
        label
        href
        isExternal
      }
      employment {
        company
        title
        startDate
        endDate
        responsibilities
        technologies {
          name
        }
      }
      project {
        title
        description
        githubLink
        liveLink
        order
        technologies {
          name
        }
      }
    }
  }
`;
