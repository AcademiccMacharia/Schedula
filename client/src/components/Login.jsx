import React from "react";
import { loginCal } from "../utils/index";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // for animations

const Login = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center px-12 gap-4">
      <motion.div
        className="h-5/6 w-2/4 bg-red-500 rounded-tr-full rounded-bl-full relative"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={loginCal}
          alt="login-calendar"
          className="absolute top-0 right-0 h-full w-full rounded-tl-full rounded-br-full object-cover opacity-80"
        />
      </motion.div>
      <div className="h-5/6 w-2/6 flex flex-col items-center justify-center">
        <h1 className="w-4/6 text-center text-3xl font-semibold tracking-wide mb-8">
          Sign in to Schedula
        </h1>
        <button className="rounded-3xl py-2 px-8 flex items-center bg-red-500 text-white mb-4">
          <FaGoogle className="mr-2 text-white" /> Login with Google
        </button>
        <div className="w-full flex justify-center items-center mb-4">
          <hr className="w-full border-1 border-black" />
          <p className="mx-4">or</p>
          <hr className="w-full border-1 border-black" />
        </div>
        <div className="w-2/4 ">
          <form className="h-full w-full flex flex-col justify-between items-center">
            <label htmlFor="email" className="form-label">
              Email*
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-input"
            />
            <label htmlFor="password" className="form-label">
              Password*
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="form-input"
            />
            <div className="w-full mt-2 flex justify-end">
              <Link
                className="text-red-500 cursor-pointer hover:underline"
                to={"/forgot-pw"}
              >
                Forgot Password?
              </Link>
            </div>
            <button className="w-full rounded-3xl py-2 px-8 bg-red-500 text-white my-4">
              Login
            </button>
          </form>
          <p className="text-center">
            Don't have an account?{" "}
            <Link className="text-red-500 cursor-pointer hover:underline" to={"/signup"}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
