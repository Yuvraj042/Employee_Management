import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center sm:p-0">
      <div className="border-2 rounded-xl border-emerald-600 p-8 sm:p-20 w-full max-w-md">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 outline-none bg-transparent border-emerald-600 font-medium text-lg rounded-full py-2 px-6 placeholder:text-gray-400 w-full mb-4"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 outline-none bg-transparent border-emerald-600 font-medium text-lg rounded-full mt-3 py-2 px-6 placeholder:text-gray-400 w-full mb-4"
            type="password"
            placeholder="Enter your password"
          />
          <button className="mt-5 text-white border-2 border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg rounded-full py-2 px-8 w-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
