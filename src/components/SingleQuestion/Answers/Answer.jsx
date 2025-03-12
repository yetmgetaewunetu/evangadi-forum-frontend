import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useAnswerStore } from "../../../store/useAnswerStore";

export default function Answer(props) {
  const { answer } = props;
  const { user, getUserById, deleteAnswer } = useAnswerStore();
  useEffect(() => {
    getUserById(answer.userId);
  }, [getUserById, answer.userId]);

  return (
    <div className="flex transition-all duration-700  items-center justify-between my-5 gap-4  w-11/12 lg:w-2/4 md:w-3/4 border border-gray-500 p-5 rounded-md">
      <div className="flex  flex-col justify-center content-center items-center gap-2">
        <FaUser className=" size-5 md:size-9" />
        <span className="md:text-lg text-md  font-semibold text-blue-500">
          {user?.firstName}
        </span>
      </div>
      <p className="text-lg flex-grow pl-5">{answer.answer}</p>
      <button
        onClick={() => {
          deleteAnswer(answer._id);
        }}
        className="justify-self-end"
      >
        <MdDelete className="text-blue-500 size-5 md:size-9 transition-colors duration-300 hover:text-red-500 " />
      </button>
    </div>
  );
}
