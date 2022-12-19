import { object, string } from "yup";

const validationSchema = object().shape({
  firstName: string().min(3, "Too short").required("Required"),
  lastName: string().min(3, "Too Short").required("Required"),
  email: string().email("Invalid Email").required("Required"),
});

export default validationSchema;
