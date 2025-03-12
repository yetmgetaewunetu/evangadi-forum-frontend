import React from "react";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../../store/useAuthStore";
export default function Register(props) {
  const { register: registerUser } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm();

  const handleRegister = async (data) => {
    console.log(JSON.stringify(data));
    try {
      registerUser(data);
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      action=""
      className="p-5 w-full bg-white text-center gap-4 flex flex-col rounded-md"
    >
      <span className="font-bold text-lg w-11/12">Join the network</span>
      <p className="text-gray-500 text-lg">
        Already have an account?{" "}
        <button
          onClick={() => {
            props.login();
          }}
          className="text-orange-500"
        >
          Sign in
        </button>
      </p>

      <div className="w-11/12 m-auto flex flex-col gap-3">
        <input
          type="text"
          {...register("username", {
            required: "username is required",
          })}
          className="w-full p-2 rounded-md border-gray-500 border"
          placeholder="username"
        />

        <div className="flex gap-3">
          <input
            {...register("firstName", {
              required: "First name is required",
            })}
            type="text"
            name="firstName"
            className="rounded-md p-2 w-11/12 border-gray-500 border"
            placeholder="First Name"
          />

          <input
            {...register("lastName", {
              required: "Last name is required",
            })}
            type="text"
            name="lastName"
            className="p-2 w-11/12 rounded-md border-gray-500 border"
            placeholder="Last Name"
          />
        </div>

        <input
          type="text"
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Invalid email address",
            },
          })}
          className="w-full p-2 rounded-md border-gray-500 border"
          placeholder="Email address"
        />
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          type="password"
          name="password"
          className="w-full p-2 rounded-md border-gray-500 border"
          placeholder="Password"
        />
      </div>

      <p className="text-lg text-gray-600">
        I agree to the{" "}
        <a className="text-orange-500 underline" href="/">
          privacy policy
        </a>{" "}
        and{" "}
        <a className="text-orange-500 underline" href="/">
          Terms of service
        </a>
      </p>

      <button
        type="submit"
        className="w-11/12 rounded-md m-auto bg-blue-500  hover:bg-blue-700 transition duration-300 text-white text-lg p-3"
      >
        Agree and Join
      </button>

      <button
        type="button"
        onClick={() => {
          props.login();
        }}
        className="text-orange-600 text-lg"
      >
        Already have an account?
      </button>
    </form>
  );
}
