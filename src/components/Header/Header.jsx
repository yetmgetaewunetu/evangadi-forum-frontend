import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import { useAuthStore } from "../../store/useAuthStore.js";
import { LogOut, PlusSquare } from "lucide-react";
import { useQuestionStore } from "../../store/useQuestionStore.js";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const { setIsWritingAnswer } = useQuestionStore();
  const { user } = useAuthStore();
  const { logout } = useAuthStore();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll();
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={
        scrollY >= 50
          ? "flex justify-between shadow-sm shadow-black sticky top-0 w-full transition-all duration-300 z-20 bg-white align-center py-5 px-10"
          : "flex justify-between shadow-sm shadow-black sticky top-0 w-full transition-all duration-300 z-20 bg-white align-center px-10 py-7"
      }
    >
      <div>
        <Link to="/">
          <img src={logo} alt="evangadi logo" />
        </Link>
      </div>
      {user && (
        <button
          onClick={() => {
            setIsWritingAnswer(true);
          }}
          className="text-xl cursor-pointer flex gap-3 items-center"
        >
          Ask
          <PlusSquare className="size-8" />
        </button>
      )}
      <div className="flex gap-5 items-center justify-between">
        <Link
          className="text-lg transition duration-300 hover:text-orange-900  "
          to="/"
        >
          Home
        </Link>
        <button onClick={() => logout()}>
          <LogOut className="size-6" />
        </button>
      </div>
    </div>
  );
}
