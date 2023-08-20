import React from "react";
import LoginForm from "./components/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-green-500 w-screen h-screen flex flex-col justify-center items-center">
      <Link to={"/"}>
        <h1 className="text-white mb-5 font-bold text-4xl">TokPlay</h1>
      </Link>
      <LoginForm />
    </div>
  );
};

export default Login;
