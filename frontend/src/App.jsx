import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router  = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "/register",
    element: <div>Register</div>,
  },
  {
    path: "/product/:id",
    element: <div>ProductDetails</div>,
  }
]);
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}