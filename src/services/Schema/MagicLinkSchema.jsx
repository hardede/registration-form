import * as yup from "yup";

export const MagicLinkSchema = yup.object().shape({
  email: yup.string().email().required(),
});
