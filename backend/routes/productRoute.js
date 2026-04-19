import express from "express";
import { getAllProducts, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();

// route for creating a product
router.post("/add", createProduct);

// route for getting all products
router.get("/", getAllProducts);

// route for updating a product
router.put("/update/:id", updateProduct);

// route for deleting a product
router.delete("/delete/:id", deleteProduct);

export default router;