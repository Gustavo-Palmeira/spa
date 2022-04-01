import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";
import { AuthContext } from "./auth";

ReactDOM.render(
  <ApolloProvider client={client}>
    <AuthContext>
      <App />
    </AuthContext>
  </ApolloProvider>,
  document.querySelector("#root")
);
