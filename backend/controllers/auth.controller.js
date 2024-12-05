import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import signUser from "../utils/tokenWorks.js";

export const signup = async (req, res) =>{
    try{
        console.log("Request Came");
        const {firstName, lastName, email, phone, password, confirmPassword, gender} = req.body;
        
        // Check for password and confirmPassword
        if(password != confirmPassword){
            return res.status(400).json({error: "Password don't match"})
        }

        // Check for existing User
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({error: "user already exists"})
        }

        // Password Hashed here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        
        // Create New User
        const newUser = new User({
            firstName,
            lastName,
            email,
            phone,
            password:hashedPassword,
            gender,
        })

        if(newUser){
            console.log("new user created, Now saving...");
            signUser(newUser._id, res);

            await newUser.save();
            console.log("new user saved");
            res.status(201).json({
                _id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
            });
        }else{
            res.status(400).json({error: "Invalid user data"});
        }

    }catch(error){
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const login = async (req, res) =>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password"});
        }

        signUser(user._id, res);

        res.status(200).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        })

    }catch(error){
        console.log("Error in login controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const logout = (req, res) =>{
    try{
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message: "Logged out successfully"})
    }catch(error){
        console.log("Error in logout controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}