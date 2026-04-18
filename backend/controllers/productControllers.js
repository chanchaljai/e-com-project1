import product from "../models/product.js";

// Create a new product

export const createProduct = async (req, res) => {
  try {
    const Product = await product.create(req.body);
    res.json({ message: "Product created successfully", product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
