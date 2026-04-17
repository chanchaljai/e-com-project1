import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);


app.get("/", (req, res) => {
    res.send("API is running...");
});

connectDB();    
app.listen(5001, () => console.log("Server started on port 5001"));