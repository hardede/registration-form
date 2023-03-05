import * as yup from "yup";

export const MessageSchema = yup.object().shape({
  message: yup.string().required(),
});
