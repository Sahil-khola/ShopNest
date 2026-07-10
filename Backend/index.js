import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", userRoute);

connectDB(); 
const port = process.env.PORT || 4000  
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});