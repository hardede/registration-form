import { gql } from "@apollo/client";

export const TRANSACTION_NOTICES = gql`
  mutation transactionNotices($input: UpdatePreferencesInput!) {
    updatePreferences(input: $input) {
      preferences {
        transactionsPushNotifications
        transactionsEmailNotifications
      }
    }
  }
`;
