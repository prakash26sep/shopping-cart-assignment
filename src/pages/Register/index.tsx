import { Box, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import "./index.scss";
import ButtonNormal from "../../core-components/Button";

// Creating schema
const schema = Yup.object().shape({
  firstName: Yup.string().required("First name is a required field"),
  lastName: Yup.string().required("Last name is a required field"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Email format is incorrect"),
  password: Yup.string()
    .required("Password is a required field")
    .min(5, "Password must be at least 5 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password does not match")
    .required("Confirm your password"),
});

function Register() {
  return (
    <Box className="form-container">
      <Box className="left-form-register">
        <Box
          component={"h2"}
          sx={{ fontWeight: 600, marginBottom: "1em", fontSize: "1.5em" }}
        >
          Signup
        </Box>
        <Box component={"p"}>
          We do not share your personal details with anyone
        </Box>
      </Box>
      <Box className="right-form-register">
        <Formik
          validationSchema={schema}
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <div className="login">
              <div className="form">
                <form noValidate onSubmit={handleSubmit}>
                  <TextField
                    id="firstName"
                    label="First name"
                    value={values.firstName}
                    variant="standard"
                    color="secondary"
                    style={{ width: "60%" }}
                    onBlur={handleBlur}
                    helperText={touched.firstName ? errors.firstName : ""}
                    error={touched.firstName && Boolean(errors.firstName)}
                    onChange={handleChange}
                  />
                  <TextField
                    id="lastName"
                    label="Last name"
                    value={values.lastName}
                    variant="standard"
                    color="secondary"
                    style={{ width: "60%" }}
                    onBlur={handleBlur}
                    helperText={touched.lastName ? errors.lastName : ""}
                    error={touched.lastName && Boolean(errors.lastName)}
                    onChange={handleChange}
                  />
                  <TextField
                    id="email"
                    label="Email"
                    value={values.email}
                    variant="standard"
                    color="secondary"
                    style={{ width: "60%" }}
                    onBlur={handleBlur}
                    helperText={touched.email ? errors.email : ""}
                    error={touched.email && Boolean(errors.email)}
                    onChange={handleChange}
                  />
                  <TextField
                    id="password"
                    label="Password"
                    variant="standard"
                    value={values.password}
                    color="secondary"
                    style={{ width: "60%" }}
                    onBlur={handleBlur}
                    helperText={touched.password ? errors.password : ""}
                    error={touched.password && Boolean(errors.password)}
                    onChange={handleChange}
                    type="password"
                  />
                  <TextField
                    id="confirmPassword"
                    label="Confirm password"
                    variant="standard"
                    value={values.confirmPassword}
                    color="secondary"
                    style={{ width: "60%" }}
                    onBlur={handleBlur}
                    helperText={
                      touched.confirmPassword ? errors.confirmPassword : ""
                    }
                    error={
                      touched.confirmPassword && Boolean(errors.confirmPassword)
                    }
                    onChange={handleChange}
                    type="password"
                  />

                  <ButtonNormal
                    type="submit"
                    text="Login"
                    variant={"contained"}
                    color="secondary"
                    style={{ marginTop: "2em", width: "60%" }}
                  />
                </form>
              </div>
            </div>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default Register;
