import * as yup from "yup";

export const UpdatePasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required()
    .min(8, "Your password is too short.")
    .max(32, "Your password is too long."),
});
