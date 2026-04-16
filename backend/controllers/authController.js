import user from "../models/user.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        // if user already exists
        const userExists = await user.findOne({ email });
        if(userExists){
            return res.status(400).json({error: "User already exists"});
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create new user
        const newUser = new user({
            name,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(200).json({message: "User registered successfully"});

    }catch(error){
        res.status(500).json({error: error.message  || "Something went wrong"});
    }
}