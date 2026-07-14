import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
             match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", AuthSchema);

export default User;
