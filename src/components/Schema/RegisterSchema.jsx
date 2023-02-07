import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("Please enter your password.")
    .min(8, "Your password is too short.")
    .max(32, "Your password is too long."),
  confirmPassword: yup
    .string()
    .required("Please type your password.")
    .oneOf([yup.ref("password")], "Your passwords do not match."),
});
