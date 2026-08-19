import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import  {fileURLToPath}     from "url";
import fileUpload from "express-fileupload";
dotenv.config();

import connectDB from "./config/db.js";

// Routes
import analyticsRoute from "./routes/analyticsRoute.js";
import orderRoute from "./routes/orderRoute.js";
import paymentRoute from "./routes/paymentRoute.js";
import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); 
app.use(cors( 
    {
        origin: process.env.CLIENT_URL ,
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

const isProduction = process.env.NODE_ENV === "production";
if (isProduction) {
    const clientDistPath = path.resolve(__dirname, "../Frontend/dist");
    app.use(express.static(clientDistPath));
    app.get("/{*path}", (req, res) => {
        res.sendFile(path.join(clientDistPath, "index.html"));
    });
}

const port = process.env.PORT || 4000;

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Backend running at http://localhost:${port}`);
    });
});
