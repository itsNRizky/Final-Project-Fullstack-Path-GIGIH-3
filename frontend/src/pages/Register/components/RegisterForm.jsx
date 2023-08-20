import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Masuk sini");
    fetch("http://localhost:5000/users/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, image }),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Akun berhasil dibuat!");
        navigate("/login");
      });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage(base64);
  };
  return (
    <div className="card bg-white rounded">
      <div className="card-body">
        <h1 className="text-center font-medium text-xl">Daftar akun</h1>
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
          <label className="label">
            <span className="label-text">Foto Profil</span>
          </label>
          <input
            type="file"
            required
            accept=".jpeg, .png, .jpg"
            className="file-input file-input-bordered w-full max-w-xs"
            onChange={(e) => handleFileUpload(e)}
          />
          <Link to={"/login"}>
            <p className="text-xs text-right underline mt-4">Masuk</p>
          </Link>
          <button
            className="btn mt-1 bg-green-500 text-white hover:bg-green-700 w-full"
            type="submit"
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
