import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-operations";
import {
  selectAllContacts,
  selectLoading,
} from "../../redux/contacts/contacts-selectors";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const loading = useSelector(selectLoading);

  const checkoutSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        "Name is not valid"
      )
      .required("required"),
    number: yup
      .string()
      .matches(
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
        "Phone number is not valid"
      )
      .required("required"),
  });
  const initialValues = {
    name: "",
    number: "",
  };

  const handleAddContact = (values, { resetForm }) => {
    const contactName = contacts.map((contact) => contact.name.toLowerCase());
    if (contactName.includes(values.name.toLowerCase())) {
      toast.error("You already have contact with such name!", {
        position: "bottom-left",
        autoClose: 5000,
        closeOnClick: true,
        theme: "colored",
      });
      resetForm();
      return;
    }
    dispatch(addContact(values));
    toast.success("Contact successfully added!", {
      position: "bottom-left",
      autoClose: 5000,
      closeOnClick: true,
      theme: "colored",
    });
    resetForm();
  };

  return (
    <>
      <Formik
        onSubmit={handleAddContact}
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
                title="Name can only contain letters, an apostrophe, a dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
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
                title="Phone number must be numeric and may contain spaces, dashes, parentheses, and may begin with a +."
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
                {loading ? <CircularProgress size={20} /> : "Create Contact"}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
}
