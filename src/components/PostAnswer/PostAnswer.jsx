import { X } from "lucide-react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import { useQuestionStore } from "../../store/useQuestionStore";

const PostAnswer = () => {
  const { isWritingAnswer, setIsWritingAnswer, postQuestion } =
    useQuestionStore();
  const [question, setQuestion] = useState({
    title: "",
    question: "",
    tags: "",
  });
  return (
    <Dialog
      open={isWritingAnswer}
      onClose={() => setIsWritingAnswer(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 ">
        <DialogPanel className="w-full space-y-4 border bg-white p-12 shadow-lg">
          <DialogTitle className="font-bold text-xl">Ask Question</DialogTitle>
          <div>
            <span>Title* </span>
            <input
              type="text"
              value={question.title}
              onChange={(e) => {
                setQuestion({ ...question, title: e.target.value });
              }}
              placeholder="title..."
              className="w-full border border-zinc-600 rounded-lg p-5"
            />
          </div>
          <div>
            <span>Description*</span>
            <input
              value={question.question}
              onChange={(e) => {
                setQuestion({ ...question, question: e.target.value });
              }}
              type="text"
              className="w-full h-36 text-md font-light rounded-lg px-4 py-2  border border-zinc-600 text-start"
              placeholder="write your question here..."
            />
          </div>
          <div>
            <span>Tags(optional)</span>
            <input
              type="text"
              value={question.tags}
              onChange={(e) => {
                setQuestion({ ...question, tags: e.target.value });
              }}
              placeholder="tags..."
              className="w-full border border-zinc-600 rounded-lg p-5"
            />
          </div>
          <div className="flex gap-4">
            <button
              className="bg-red-500 rounded-lg text-white px-3 py-2 hover:opacity-90"
              onClick={() => setIsWritingAnswer(false)}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:opacity-90"
              onClick={() => {
                postQuestion(question);
              }}
            >
              Post
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default PostAnswer;
