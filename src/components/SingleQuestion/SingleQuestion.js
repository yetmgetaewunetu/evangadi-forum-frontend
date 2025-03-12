import React, { useContext, useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import { AppContext } from "../../utils/context";
import { useNavigate, useParams } from "react-router-dom";
import Answer from "./Answers/Answer";
import { useForm } from "react-hook-form";
import { useAnswerStore } from "../../store/useAnswerStore";

export default function SingleQuestion() {
  const { user } = useContext(AppContext);
  const { qid } = useParams();
  const answerInp = useRef(null);
  const {
    getQuestionById,
    deleteAnswer: DeleteAnswer,
    postAnswer,
    question,
    getAllAnswers,
    answers,
  } = useAnswerStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getAllAnswers(qid);
    getQuestionById(qid);
    console.log(answers);
  }, [getAllAnswers, qid, getQuestionById]);

  const acceptAnswer = async (data) => {
    postAnswer(qid, data.answer);
    reset();
  };

  return (
    <div className="flex flex-col p-6 justify-center content-center">
      <div className="flex justify-center flex-col items-center">
        <FaUser className="text-blue-600" size={50} />
        <span className="text-xl font-semibold">{user}</span>
      </div>
      <section className="text-xl flex flex-col pl-0 md:pl-20">
        <div className="flex items-center gap-4 py-3">
          <span className=" text-gray-700 italic font-semibold">Title: </span>
          <p className="text-lg">{question?.title}</p>
        </div>
        <div className="flex  items-center gap-4 py-3">
          <span className=" text-gray-700 italic font-semibold">
            Description:{" "}
          </span>
          <p className="text-lg">{question?.description}</p>
        </div>
        <div className="flex  items-center gap-4 py-3">
          <span className=" text-gray-700 italic font-semibold">Tags: </span>
          <p className="text-lg">{question?.tags}</p>
        </div>
      </section>
      <hr className="border-2 " />
      <section className="flex w-full flex-col items-center">
        <h1 className="text-3xl my-5 text-center font-semibold  uppercase">
          Answers
        </h1>
        {answers?.map((answer, index) => {
          return <Answer answer={answer} index={index} key={index} />;
        })}
      </section>
      <div>
        <form
          onSubmit={handleSubmit(acceptAnswer)}
          action=""
          className="p-3 gap-4  w-11/12 lg:w-2/4 md:w-3/4 transition-all duration-700 flex-col flex rounded-md border-2 my-9 mx-auto"
        >
          <h2 className="text-center text-xl font-semibold text-gray-500">
            Your Answer
          </h2>
          <textarea
            ref={answerInp}
            {...register("answer", {
              required: "please provide an answer first!",
            })}
            className="p-2 border border-gray-700 rounded-lg my-6"
            placeholder="Provide your answer here..."
          ></textarea>
          <p className="text-red">{errors.answer && errors.answer.message}</p>
          <button className="px-4 py-2 rounded-md hover:bg-orange-800 transition-all duration-300 text-lg bg-orange-600 text-white">
            Post Answer
          </button>
        </form>
      </div>
    </div>
  );
}
