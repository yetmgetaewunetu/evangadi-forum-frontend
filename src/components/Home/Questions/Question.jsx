import React, { useEffect, useState } from "react";
import avater from "../../../user.png";
import axios from "../../../utils/axios";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Question({ userId, titile, description, tag, _id }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const response = await axios.get(`/users/getUser/${userId}`);
        setUser(response.data.username);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchuser();
  }, [userId]);

  return (
    <Link
      to={`/single/${_id}`}
      className="cursor-pointer transition-all w-11/12 lg:w-2/4 md:w-3/4  duration-300 pr-6 hover:pr-5"
    >
      <div className="flex w-full rounded-md gap-5 py-3 pl-10 my-6 border-2 border-blue-600 justify-between items-center">
        <div className="flex gap-6 items-center">
          <div>
            <img className="h-6 md:h-10" src={avater} alt="user logo" />
            <span className="capitalize font-bold">{user}</span>
          </div>
          <p className="text-lg capitalize text-gray-600 font-bold">
            {description}
          </p>
        </div>

        <div className="justify-self-end p-1 ">
          <button className="">
            <FaRegArrowAltCircleRight className="text-orange-700" size={25} />
          </button>
        </div>
      </div>
    </Link>
  );
}
