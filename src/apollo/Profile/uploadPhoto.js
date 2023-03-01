import { gql } from "@apollo/client";

export const UPLOAD_PHOTO = gql`
  mutation UploadPhoto($file: Upload!) {
    uploadPhoto(file: $file) {
      photo
    }
  }
`;
