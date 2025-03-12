import React from "react";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../../store/useAuthStore";
import toast from "react-hot-toast";

export default function Login(props) {
  const { login } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      // Now, validation is handled by react-hook-form
      login(data);
    } catch (error) {
      console.log(error.message);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="p-5 w-full bg-white text-center gap-4 flex flex-col rounded-md"
    >
      <span className="font-bold w-11/12">Login to your account</span>
      <p className="text-gray-500 text-lg">
        Don't have an account?{" "}
        <span
          onClick={() => {
            props.register();
          }}
          className="text-orange-500 cursor-pointer"
        >
          Register
        </span>
      </p>

      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Please enter a valid email address",
          },
        })}
        className="p-3 border-gray-300 w-11/12 m-auto border-2"
        type="text"
        placeholder="Email Address"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
        })}
        className="p-3 border-gray-300 w-11/12 m-auto border-2"
        type="password"
        placeholder="Password"
      />
      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}

      <p className="text-orange-500 text-right font-semibold">
        <a href="/">Forgot Password?</a>
      </p>
      <button className="w-11/12 m-auto bg-blue-500 rounded-md hover:bg-blue-700 transition duration-300 text-white text-lg p-3">
        Login
      </button>
    </form>
  );
}
