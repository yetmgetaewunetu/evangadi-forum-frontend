import React, { useEffect, useState } from "react";
import Question from "./Questions/Question";
import { useQuestionStore } from "../../store/useQuestionStore";
import PostAnswer from "../PostAnswer/PostAnswer";

export default function Home() {
  const { getAllQuestions, questions, isWritingAnswer } = useQuestionStore();

  useEffect(() => {
    getAllQuestions();
  }, [getAllQuestions]);

  return (
    <div>
      <PostAnswer />
      <div className={`flex flex-col justify-center my-10 items-center`}>
        {questions?.map((item) => (
          <Question {...item} key={item._id} />
        ))}
      </div>
    </div>
  );
}
