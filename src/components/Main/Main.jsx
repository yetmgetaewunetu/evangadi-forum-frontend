import React, { useRef, useState } from "react";
import bg from "../../bg.jpg";
import Login from "../Login/Login";
import Register from "../Register/Register";

export default function Main() {
  const [newuser, setNew] = useState(false);
  const ref = useRef(null);

  const register = () => {
    if (newuser) return;
    ref.current.style.transform = "translateX(-200px)";
    setTimeout(() => {
      setNew(true);
      ref.current.style.transform = "translateX(0px)";
    }, 300);
  };
  const login = () => {
    if (!newuser) return;
    ref.current.style.transform = "translateX(-200px)";
    setTimeout(() => {
      setNew(false);
      ref.current.style.transform = "translateX(0px)";
    }, 300);
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.06), rgba(0,0,0,0.06)), url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="p-2 h-full flex flex-col flex-grow min-h-full pt-10 w-full"
    >
      <div className=" flex flex-col md:flex-row gap-5 h-full  w-full content-center justify-center">
        <div className="flex overflow-hidden bg-white rounded-md w-11/12   gap-x-10 md:w-5/12">
          <div
            ref={ref}
            style={{
              transition: "all 0.5s",
              width: "100%",
            }}
          >
            {newuser ? (
              <Register register={register} login={login} />
            ) : (
              <Login login={login} register={register} />
            )}
          </div>
        </div>

        <div className=" gap-x-10 w-11/12 md:w-5/12 p-5  rounded-md">
          <span className=" text-orange-600 font-semibold text-xl">About</span>
          <h1 className="py-2 mb-9  text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-900 ">
            Evangadi Networks
          </h1>
          <div className="flex flex-col gap-5">
            <p>
              No matter what stage of life you are in, whether you’re just
              starting elementary school or being promoted to CEO of a Fortune
              500 company, you have much to offer to those who are trying to
              follow in your footsteps.
            </p>
            <p>
              Wheather you are willing to share your knowledge or you are just
              looking to meet mentors of your own, please start by joining the
              network here.
            </p>
          </div>
          <button
            onClick={() => {
              register();
            }}
            className="bg-orange-500 px-5 py-3 mt-5 text-white font-semibold"
          >
            CREATE A NEW ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
}
