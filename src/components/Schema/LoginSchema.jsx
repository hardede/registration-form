import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("Please enter your password.")
    .min(8, "Your password is too short.")
    .max(32, "Your password is too long."),
});
