import axios from "axios";

const instance = axios.create({
  baseURL: "https://evangadi-forum-backend-uzja.onrender.com/api",
  withCredentials: true,
});

export default instance;
