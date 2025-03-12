import React from "react";
import logo from "../../footerLogo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center gap-4 flex-1 bg-footer flex-grow-0  w-full p-10 text-white">
      <div className="flex flex-col w-5/12 md:w-auto justify-between gap-6 gap-5">
        <a href="">
          <img className="w-full " src={logo} alt="logo" />
        </a>

        <div className="flex justify-around">
          <FaFacebook className="hover:bg-green-300 hover:text-white transition duration-500 cursor-pointer rounded-full size-7" />
          <FaInstagram className="hover:bg-green-300 hover:text-white transition duration-500 cursor-pointer rounded-full size-7" />
          <FaYoutube className="hover:bg-green-300 hover:text-white transition duration-500 cursor-pointer rounded-full size-7" />
        </div>
      </div>
      <div>
        <ul>
          <li className="text-white text-lg font-bold">Useful Link</li>
          <li>
            <a
              href=""
              className="text-m text-gray-400 hover:text-white transition duration-300 "
            >
              Terms Of Service
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-m text-gray-400 hover:text-white transition duration-300 "
            >
              Privace Policy
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="text-white text-lg font-bold">Contact Info</li>
          <li className="text-mm text-gray-400 ">support@evangadi.com</li>
          <li className="text-m text-gray-400 ">+1-202-386-2702</li>
        </ul>
      </div>
    </div>
  );
}
