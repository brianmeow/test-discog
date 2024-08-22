import { gql } from "@apollo/client";
export const GET_PINNED_ITEMS = gql`
  query GetPinnedItems($username: String!) {
    user(login: $username) {
      pinnedItems(first: 6) {
        totalCount
        edges {
          node {
            ... on Repository {
              id
              name
              description
              url
            }
          }
        }
      }
    }
  }
`;
