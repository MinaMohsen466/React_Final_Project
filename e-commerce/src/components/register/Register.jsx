import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import AuthAxios from "../../configAxios/AuthAxios";
import toast from "react-hot-toast";

const Register = (prop) => {
  const { setComponentId } = prop;
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string(),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).max(25).required(),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  async function handelRegister(values) {
    try {
      await AuthAxios({
        url: "/register",
        method: "POST",
        data: values,
      });
      toast.success("Success Register...");
      setComponentId(1);
    } catch (error) {
      toast.error("Invalid user...");
    }
  }
  const onSubmit = (values) => {
    handelRegister(values);
  };
  return (
    <>
      <h1>Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <div className="input-group">
              <div className="inputData">
                <label htmlFor="name">Name:</label>
                <Field name="name" placeholder="user@gamil.com" />
                <ErrorMessage name="name" />
              </div>
              <div className="inputData">
                <label htmlFor="email">E-mail:</label>
                <Field type="email" name="email" placeholder="user@gamil.com" />
                <ErrorMessage name="email" />
              </div>
              <div className="inputData">
                <label htmlFor="password">Password:</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="*********"
                />
                <ErrorMessage name="password" />
              </div>
              <div className="inputData">
                <label htmlFor="confirm_password">confirm-Password:</label>
                <Field
                  type="password"
                  name="confirm_password"
                  placeholder="*********"
                />
                <ErrorMessage name="confirm_password" />
              </div>
            </div>
            <div className="form-btn">
              <button type="submit">Register</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Register;
