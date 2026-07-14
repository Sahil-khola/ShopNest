import express from "express";
const router = express.Router();
import {protect,admin} from "../middlewares/authMiddleware.js";
import { createProduct, getMyOrders, getAllOrders, updateOrderStatus } from "../controllers/order.controller.js";

router.post("/",protect,createProduct);
router.get("/myOrders",protect,getMyOrders);

// admin Routes
router.get("/",protect,admin,getAllOrders);
router.put("/orderStatus/:id",protect,admin,updateOrderStatus);

export default router;