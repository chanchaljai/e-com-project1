import React, { useState } from "react";
import {api} from "../api/axios";
export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState("");

  // input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // submit
  const handleSubmit =async (e) => {
    e.preventDefault();

    try{
      const res = await api.post("/auth/register", form);
      setMsg("Registration successful");
      console.log(form);

      // clear form
      setForm({
        name: "",
        email: "",
        password: "",
      });

    }catch (error) {
      setMsg(error.response?.data?.msg || "Something went wrong");
    }

  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className= "bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
      <h1 className="text-3xl text-center mb-3 text- font-bold ">Register Here</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange} 
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition" onClick={handleSubmit}>Register</button>
        <p>{msg}</p>
      </form>
    </div>
   </div>
  );
}