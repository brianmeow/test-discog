import {ApolloClient, InMemoryCache } from "@apollo/client";
console.log('process', process.env)
const apolloClient = new ApolloClient({
    uri: `${process.env.GRAPHQL_ENDPOINT}`,
    cache: new InMemoryCache(),
    headers: {
      Authorization:
        `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
});

console.log("client",apolloClient)
export default apolloClient;