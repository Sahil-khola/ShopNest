import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
dotenv.config();

import connectDB from "./config/db.js";

// Routes
import analyticsRoute from "./routes/analyticsRoute.js";
import orderRoute from "./routes/orderRoute.js";
import paymentRoute from "./routes/paymentRoute.js";
import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express(); 
app.use(cors( 
    {
        origin: process.env.CLIENT_URL,
        credentials: true,
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    fileUpload({
        useTempFiles: true, 
        tempFileDir: "tmp",
        createParentPath: true,
    }),
);

// Routes
app.use("/api/auth", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/analytics", analyticsRoute);

connectDB(); 
const port = process.env.PORT || 4000  
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});