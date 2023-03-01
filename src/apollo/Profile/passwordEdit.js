import { gql } from '@apollo/client';

export const PASSWORD_EDIT = gql`
  mutation ChangePassword($input: ChangePasswordInput!) {
    changePassword(input: $input) {
      email
    }
  }
`;
