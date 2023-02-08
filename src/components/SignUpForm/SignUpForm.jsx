import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Button, TextField, Box, Grid } from "@mui/material";
import { register } from "../../redux/auth/auth-operations";

export default function SignUpForm() {
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        "Name is not valid"
      )
      .required("required"),
    email: yup.string().email("Write correct email").required("Required"),
    password: yup
      .string()
      .min(6)
      .typeError("Must be a string")
      .required("Required"),
  });
  const handleSubmit = (e) => {
    const name = e.name;
    const email = e.email;
    const password = e.password;
    dispatch(register({ name, email, password }));
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validateOnBlur
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Userame"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={!!touched.name && !!errors.name}
            helperText={touched.name && errors.name}
          />
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={!!touched.email && !!errors.email}
            helperText={touched.email && errors.email}
          />
          <TextField
            margin="normal"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={!!touched.password && !!errors.password}
            helperText={touched.password && errors.password}
            name="password"
            label="Password"
            type="password"
            id="password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/login" variant="body2">
                Already registred? Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      )}
    </Formik>
  );
}
