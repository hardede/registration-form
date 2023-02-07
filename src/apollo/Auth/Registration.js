import { gql } from "@apollo/client";

export const REGISTER_NEW_USER = gql`
  mutation Registration($input: SignUpInput!) {
    signUp(input: $input) {
      ... on JWTTokens {
        accessToken
        refreshToken
      }
      ... on EmailResult {
        sent
      }
    }
  }
`;

export const LOGIN_USER_PASSWORD = gql`
  mutation SignInByPassword($input: SignInInput!) {
    signIn(input: $input) {
      ... on JWTTokens {
        accessToken
        refreshToken
      }
    }
  }
`;

export const LOGIN_USER_MAGIC_LINK = gql`
  mutation SignInByLink($input: SignInInput!) {
    signIn(input: $input) {
      ... on JWTTokens {
        accessToken
        refreshToken
      }
      ... on EmailResult {
        sent
      }
    }
  }
`;
