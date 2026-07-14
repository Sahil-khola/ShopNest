import express from "express";
const router = express.Router();
import { getAnalytics } from "../controllers/analytics.controller.js";
import {protect,admin} from "../middlewares/authMiddleware.js";

router.get("/",protect,admin ,getAnalytics);

export default router;