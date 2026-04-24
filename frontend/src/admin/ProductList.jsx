import { api } from "../api/axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const loadProducts = async () => {
    const res = await api.get("/products");
    setProducts(res.data);
  }

  const deleteProduct = async (id) => {
    try{
      await api.delete(`/products/${id}`);
      loadProducts();
    }catch(error){
      console.error("Error deleting product:", error);
    }
  }
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="flex justify-between mb-4 p-4">
        <h2 className="text-2xl font-bold">Product List</h2>
        <Link to="/admin/products/add" 
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Add New Product</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Stock</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
