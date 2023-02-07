import { gql } from "@apollo/client";

export const CONFIRM_EMAIL = gql`
  mutation ConfirmEmail($input: ConfirmEmailInput!) {
    confirmEmail(input: $input) {
      accessToken
      refreshToken
    }
  }
`;
