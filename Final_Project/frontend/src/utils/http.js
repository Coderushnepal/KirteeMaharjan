import axios from "axios";

import config from "./config";
import localStorageService from "../utils/localStorage";

const http = axios.create({
  baseURL: config.baseURI,
  headers: {
    "Content-type": "application/json",
  },
});

http.interceptors.request.use(
  (req) => {
    const token = localStorageService.getAccessToken();
    if (token) {
      req.headers["Authorization"] = "Bearer " + token;
    }
    return req;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default http;
