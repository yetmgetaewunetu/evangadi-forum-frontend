import { create } from "zustand";
import axiosInstance from "../utils/axios.js";
import toast from "react-hot-toast";

export const useQuestionStore = create((set, get) => ({
  questions: null,
  isWritingAnswer: false,
  setIsWritingAnswer: (value) => {
    set({ isWritingAnswer: value });
  },
  getAllQuestions: async () => {
    try {
      const res = await axiosInstance.get("/questions/all-questions");
      if (res) {
        set({ questions: res.data.data });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  postQuestion: async (question) => {
    try {
      const res = await axiosInstance.post("/questions/post", question);
      if (res) {
        toast.success("Question posted successfully");
        set({ isWritingAnswer: false });
        set({ questions: [...get().questions, res.data.newQuestion] });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
}));
