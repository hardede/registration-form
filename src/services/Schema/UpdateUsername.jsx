import * as yup from "yup";

export const UsernameEditSchema = yup.object().shape({
  username: yup
    .string()
    .required()
    .min(4, "Your username is too short.")
    .max(20, "Your username is too long."),
});
