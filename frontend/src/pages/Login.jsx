import React, { useState } from "react";
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  // input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      setMsg("Login successful");
      console.log(form);
      localStorage.setItem("token", res.data.token);
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
      setMsg(error.response?.data?.msg || "Something went wrong");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl text-center mb-3 text-gray-800 font-bold ">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="w-full bg-blue-500 text-white font-semibold
             hover:bg-blue-600 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
          >
            Login
          </button>
        </form>
        <p>{msg}</p>
      </div>
    </div>
  );
}
