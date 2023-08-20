import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthUser, setIsLoggedIn } = useAuth();

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/users/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        setAuthUser(res.user);
        setIsLoggedIn(true);
        navigate("/");
      });
  };
  return (
    <div className="card bg-white rounded">
      <div className="card-body">
        <h1 className="text-center font-medium text-xl">Masuk</h1>
        <form onSubmit={submitHandler}>
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to={"/register"}>
            <p className="text-xs text-right underline mt-4">Daftar akun</p>
          </Link>
          <button
            className="btn mt-1 bg-green-500 text-white hover:bg-green-700 w-full"
            type="submit"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
