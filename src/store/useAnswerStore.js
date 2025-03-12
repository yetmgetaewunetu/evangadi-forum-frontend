import { create } from "zustand";
import axiosInstance from "../utils/axios.js";
import toast from "react-hot-toast";

export const useAnswerStore = create((set, get) => ({
  answers: null,
  user: null,
  question: null,
  getAllAnswers: async (qid) => {
    try {
      const res = await axiosInstance.get(`/answers/answer/${qid}`);
      if (res) {
        set({ answers: res.data.data });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  getQuestionById: async (qid) => {
    try {
      const res = await axiosInstance.get(`/questions/getQuestionById/${qid}`);
      if (res) {
        set({ question: res.data });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  postAnswer: async (qid, answer) => {
    try {
      const res = await axiosInstance.post(`/answers/post/${qid}`, { answer });
      if (res) {
        toast.success("Answer posted successfully");
        set({ answers: [...get().answers, res.data.newAnswer] });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  deleteAnswer: async (answerid) => {
    try {
      await axiosInstance.delete(`/answers/delete/${answerid}`);
      toast.success("Answer deleted successfully");
      set({
        answers: get().answers.filter((answer) => answer._id !== answerid),
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  getUserById: async (id) => {
    try {
      const res = await axiosInstance.get(`/users/getUser/${id}`);
      if (res) {
        set({ user: res.data });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
}));
