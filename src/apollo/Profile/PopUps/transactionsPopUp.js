import { gql } from "@apollo/client";

export const TRANSACTION_POP_UP = gql`
  mutation transactionPopUp($input: UpdatePreferencesInput!) {
    updatePreferences(input: $input) {
      preferences {
        transactionsPushNotifications
        transactionsEmailNotifications
      }
    }
  }
`;
