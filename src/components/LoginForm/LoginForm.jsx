import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Button, TextField, Box, Grid } from "@mui/material";
import { login } from "../../redux/auth/auth-operations";

export default function LoginForm() {
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    email: yup.string().email("Write correct email").required("Required"),
    password: yup
      .string()
      .min(6)
      .typeError("Must be a string")
      .required("Required"),
  });
  const handleSubmit = (e) => {
    const email = e.email;
    const password = e.password;
    dispatch(login({ email, password }));
  };

  return (
    <Formik
      initialValues={{
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
            variant="filled"
            id="email"
            label="Email"
            name="email"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={!!touched.email && !!errors.email}
            helperText={touched.email && errors.email}
          />
          <TextField
            margin="normal"
            fullWidth
            variant="filled"
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
            Login
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/signup">Don't have an account? Sign Up!</Link>
            </Grid>
          </Grid>
        </Box>
      )}
    </Formik>
  );
}
