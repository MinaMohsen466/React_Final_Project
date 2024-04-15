import axios from "axios";

const url = "http://localhost:3500";

const AuthAxios = axios.create({
  baseURL: url,
});
AuthAxios.defaults.headers.common.Accept = "application/json";
AuthAxios.defaults.headers.common["Content-Type"] = "application/json";

export default AuthAxios;
