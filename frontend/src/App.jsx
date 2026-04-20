import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails  from "./pages/ProductDetails";
import AddProduct from "./admin/AddProduct";

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/login", element: <Login />}, 
  {path: "/register", element: <Register />},
  {path: "/product/:id", element: <ProductDetails />},
  {path: "/admin/products/add", element: <AddProduct />}
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

