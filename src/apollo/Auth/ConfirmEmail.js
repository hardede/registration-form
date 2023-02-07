import { gql } from "@apollo/client";

export const CONFIRM_EMAIL = gql`
  mutation ConfirmEmail($confirmEmailInput: ConfirmEmailInput!) {
    confirmEmail(input: $confirmEmailInput) {
      accessToken
      refreshToken
    }
  }
`;
