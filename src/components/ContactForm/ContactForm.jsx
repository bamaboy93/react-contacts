import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";

export default function ContactForm() {
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    name: yup.string().required("required"),
    number: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
  });
  const initialValues = {
    name: "",
    number: "",
  };

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={checkoutSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box display="grid" gap="30px">
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              name="name"
              error={!!touched.name && !!errors.name}
              helperText={touched.name && errors.name}
              sx={{ gridColumn: "span 4" }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.number}
              name="number"
              error={!!touched.number && !!errors.number}
              helperText={touched.number && errors.number}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Create Contact
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}
