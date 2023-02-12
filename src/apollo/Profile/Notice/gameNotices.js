import { gql } from "@apollo/client";

export const GAME_NOTICES= gql`
  mutation gameNotices($input: UpdatePreferencesInput!) {
    updatePreferences(input: $input) {
      preferences {
        gamePushNotifications
        gameEmailNotifications
      }
    }
  }
`;
