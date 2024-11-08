import * as yup from "yup";
export let signUpSchema = yup.object().shape({
  username: yup.string().min(3, "Enter your Right Name").required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8, "Must be 8 characters at least")
    .required("Enter your Password"),
});
export let loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8, "Must be 8 characters at least")
    .required("Enter your Password"),
});
