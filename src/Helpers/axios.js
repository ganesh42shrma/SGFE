import axios from "axios";
import store from "../Redux/store"; // Import your Redux store

const API_URL = "https://sgbe-1.onrender.com/api/";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Attach token from Redux to the Authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token; // Access token from Redux
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
