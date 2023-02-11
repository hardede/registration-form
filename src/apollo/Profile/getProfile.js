import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query GetProfile {
    getProfile {
      userUuid
      username
      photo
      email
      isOnline
      lastActive
      createdAt
      preferences {
        gamePushNotifications
        gameEmailNotifications
        transactionsPushNotifications
        transactionsEmailNotifications
      }
      shownPopups
      kyc {
        userUuid
        status
        restricted
        whitelisted
        firstName
        lastName
        birthDate
        country
        streetAddress
        city
        state
        zip
        createdAt
        updatedAt
      }
    }
  }
`;
