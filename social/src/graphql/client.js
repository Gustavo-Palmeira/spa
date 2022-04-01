import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://tender-caiman-91.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "9wV7aslZ3fyByyCNBXkLKQpkJJGVEO5ZT7G12BlmLjMELxp50ttWbRnIus3ll92X",
  },
  cache: new InMemoryCache(),
});
