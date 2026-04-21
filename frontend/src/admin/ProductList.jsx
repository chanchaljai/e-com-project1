import { api } from "../api/axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  return (
    <div>
      <div>
        <h2>Product List</h2>
        <Link to="/admin/products/add">Add New Product</Link>
      </div>
    </div>
  );
}
