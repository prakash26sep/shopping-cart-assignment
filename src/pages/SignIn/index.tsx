import { Box, TextField } from "@mui/material";
import * as Yup from "yup";
import "./index.scss";
import ButtonNormal from "../../core-components/Button";
import { Formik } from "formik";

// Yup schema for form handling
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Email format is incorrect"),
  password: Yup.string()
    .required("Password is a required field")
    .min(5, "Password must be at least 5 characters"),
});

function SignIn() {
  return (
    <Box className="form-container">
      <Box className="left-form-sign">
        <Box
          component={"h2"}
          sx={{ fontWeight: 600, marginBottom: "1em", fontSize: "1.5em" }}
        >
          Login
        </Box>
        <Box component={"p"}>
          Get access to your orders, wishlists and recommendations
        </Box>
      </Box>
      <Box className="right-form-sign">
        <Formik
          validationSchema={schema}
          initialValues={{ email: "", password: "" }}
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

export default SignIn;
