import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://evangadi-forum-backend-uzja.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;
