import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import AuthAxios from "../../configAxios/AuthAxios";
import toast from "react-hot-toast";
import { useContext } from "react";
import { Allcontext } from "../../context/Context";

const Login = () => {
  const { setToken } = useContext(Allcontext);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).max(25).required(),
  });
  async function handelLogin(values) {
    try {
      const { data } = await AuthAxios({
        url: "/login",
        method: "POST",
        data: values,
      });
      toast.success("Success Login...");
      navigate("/home");
      setToken(data.accessToken);
      localStorage.setItem("use_Token", data.accessToken);
    } catch (error) {
      toast.error("Invalid user or password...");
    }
  }
  const onSubmit = (values) => {
    handelLogin(values);
  };
  return (
    <>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <div className="inputData">
              <label htmlFor="email">E-mail:</label>
              <Field type="email" name="email" placeholder="user@gamil.com" />
              <ErrorMessage name="email" />
            </div>
            <div className="inputData">
              <label htmlFor="password">Password:</label>
              <Field type="password" name="password" placeholder="*********" />
              <ErrorMessage name="password" />
            </div>
            <div className="form-btn">
              <button type="submit">Login</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
