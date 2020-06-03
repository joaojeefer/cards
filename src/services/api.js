import axios from "axios";
import config from "./config";

const { url } = config;

const api = axios.create({
  baseURL: url.baseURL,
});

export default api;
