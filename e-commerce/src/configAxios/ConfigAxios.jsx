import axios from "axios";
const url = "https://fakestoreapi.com";

const configAxios = axios.create({
  baseURL: url,
});
configAxios.defaults.headers.common.Accept = "application/json";
configAxios.defaults.headers.common["Content-Type"] = "application/json";

export default configAxios;
