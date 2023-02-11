import { gql } from "@apollo/client";

export const GAME_POP_UP= gql`
  mutation gamePopUp($input: UpdatePreferencesInput!) {
    updatePreferences(input: $input) {
      preferences {
        gamePushNotifications
        gameEmailNotifications
      }
    }
  }
`;
