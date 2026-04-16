import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);

app.get("/", (req, res) => res.send("Hello World!"));
connectDB();
app.post("/api/auth/register", (req, res) => {
    res.json({ message: "Direct register working" });
});

app.listen(5001, () => {
    console.log("Server running on port 5001");
});


