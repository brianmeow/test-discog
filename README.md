# Discogs Technical Exercise

## Setup
1. Clone the repository
2. Install dependencies
3. Create a `.env` file and add your API keys.
    GRAPHQL_ENDPOINT = "https://api.github.com/graphql"
    GITHUB_ACCESS_TOKEN="Your github access token"
4. Run the app 
   npm run dev 

## Design Decisions

- **Apollo Client**: Chosen for its integration with GraphQL and caching capabilities.
- **TypeScript**: To ensure type safety and better developer experience.
- **Component Structure**: Components are split into small, reusable pieces.
- **Styling**: Used `styled-components` for scoped and dynamic styling.

## Trade-offs

- **API Key Management**: Storing API keys in the frontend is not secure. For production, this should be handled server-side.
- **Error Handling**: Basic error handling is implemented, but could be expanded to cover more cases.