import { gql } from "@apollo/client";

export const USERNAME_EDIT = gql`
  mutation UpdateProfile($input: ProfileInput!) {
    updateProfile(input: $input) {
      username
    }
  }
`;
