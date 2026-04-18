import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        // Send response
        res.status(201).json({ user });

    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const login = async (req, res) => {
    try {
            const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ error: "User does not exist" });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET,{
        expiresIn: "7d",
    });
    // Send response
    res.json({message: "Login successful", token, user:
        {
            id: user._id,
            name: user.name,
            email: user.email
        }
     });


    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}
    
