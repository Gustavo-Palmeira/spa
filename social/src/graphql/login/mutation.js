import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation REGISTER($name: String!, $password: String!, $username: String!) {
    insert_user(
      objects: { name: $name, password: $password, username: $username }
    ) {
      returning {
        id
        name
        username
      }
    }
  }
`;
