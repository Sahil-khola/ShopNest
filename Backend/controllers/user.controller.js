import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const genratetoken = (id) => {
    return jwt.sign({ id }, process.env.JWT_USER_KEY, {
        expiresIn: "30d",
    });
}

 async function userRegister(req, res) {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ msg: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    
    // Create user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

   // OTP generation
   if(newUser){
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const message = `
    Welcome to ShopeNest, your OTP is ${otp}
    `;
    
    // Send Mail
    await sendEmail(email,`Welcome to ShopeNest -Your OTP` ,message);
    res.status(201).json({ msg: "User created successfully",
        user: {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            role : newUser.role,
            token: genratetoken(newUser._id),
        }
    });
   }else{
    res.status(400).json({ msg: "Invalid user details" });
   }
  } catch (error) {
    console.error("Error in userRegister:", error);
    return res.status(500).json({ msg: "Internal server error" });
  }
}

async function userLogin(req, res) {
try {
    const { email, password } = req.body;
    // Validate input
    if(!email,!password) return res.status(400).json({ msg: "All fields are required" });

    // Check if user exists
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({ msg: "User does not exist" });
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch) return res.status(400).json({ msg: "Incorrect password" });
    return res.status(200).json({ msg: "Login successful",
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role : user.role,
            token: genratetoken(user._id),
    }});
    
} catch (error) {
    res.status(500).json({ msg: "Internal server error" });
}
}

async function getUsersDetails(req, res) {
    try {
        const users = await User.find().select("-password");
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ msg: "Internal server error" });
    }
}

export {userRegister,userLogin,getUsersDetails};


 