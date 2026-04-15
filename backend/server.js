import connectDB from "./config/db.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API is running... on /api"));

connectDB();
app.listen(5000, () => console.log("Server started on port 5000"));
