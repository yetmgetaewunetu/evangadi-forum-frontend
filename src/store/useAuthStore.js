import { create } from "zustand";
import toast from "react-hot-toast";
import axiosInstance from "../utils/axios.js";
export const useAuthStore = create((set, get) => ({
  user: null,
  logout: async () => {
    try {
      await axiosInstance.get("/users/logout");
      set({ user: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.message);
    }
  },
  register: async (data) => {
    try {
      const res = await axiosInstance.post("/users/register", data);
      if (res) {
        toast.success("Registered successfully");
      }
      set({ user: res.data.user });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  login: async (data) => {
    try {
      console.log("logging in: ", data);
      const res = await axiosInstance.post("/users/login", data);
      if (res) {
        toast.success("Logged in successfully");
      }
      set({ user: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
}));
