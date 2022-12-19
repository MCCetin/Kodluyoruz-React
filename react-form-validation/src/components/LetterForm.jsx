import React from "react";
import { useFormik } from "formik";
import validationSchema from "./FormValitadion";

function LetterForm() {
  const { handleChange, handleBlur, handleSubmit,getFieldProps, values, errors, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      validationSchema,

      onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
    });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          {...getFieldProps("firstName")}
        />
        {errors.firstName && touched.firstName ? (
          <span style={{ color: "red" }}>{errors.firstName}</span>
        ) : null}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          {...getFieldProps("lastName")}
        />
        {errors.lastName && touched.lastName ? (
          <span style={{ color: "red" }}>{errors.lastName}</span>
        ) : null}
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          {...getFieldProps("email")}
        />
        {errors.email && touched.email ? (
          <span style={{ color: "red" }}>{errors.email}</span>
        ) : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default LetterForm;
