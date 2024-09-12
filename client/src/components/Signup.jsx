import React from "react";
import { logo, calendar } from "../utils/index";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // for animations

const Signup = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center px-12 gap-4">
      <div className="h-5/6 w-2/6 flex flex-col items-center">
        <div className="w-full flex items-left">
          <img src={logo} alt="logo" className="w-44 h-auto mb-12" />
        </div>
        <h1 className="w-4/6 text-center text-3xl font-semibold tracking-wide mb-8">
          Create your account
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
            <label htmlFor="name" className="form-label">
              Name*
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="form-input"
            />
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
            <label htmlFor="confirm-password" className="form-label">
              Confirm Password*
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="form-input"
            />
            <button className="w-full rounded-3xl py-2 px-8 bg-red-500 text-white my-4">
              Sign up
            </button>
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <Link className="text-red-500 cursor-pointer" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>

      <motion.div
        className="h-5/6 w-2/4 bg-gray-300 rounded-tl-full rounded-br-full relative"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={calendar}
          alt="calendar"
          className="absolute top-0 right-0 h-full w-full rounded-tl-full rounded-br-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center">
          <h2 className="text-4xl text-red-500 font-bold mb-4">
            Organize Your Events Seamlessly
          </h2>
          <p className="text-lg mb-6 text-red-500 font-semibold">
            With Schedula, creating, managing, and planning your events is just
            a click away. Never miss a date!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
