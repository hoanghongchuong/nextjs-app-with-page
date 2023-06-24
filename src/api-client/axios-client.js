import { getTokenFromLocalStorage } from "@/utils/localStorage";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8001/api",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  },
});

axiosClient.interceptors.request.use(function (config) {
  const adminToken = getTokenFromLocalStorage("admin_token");
  // Gắn token vào header Authorization
  if (adminToken) {
    config.headers.Authorization = `Bearer ${adminToken}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if(error.response.status == 401) {

    }
    return Promise.reject(error.response?.data);
  }
);

export default axiosClient;
