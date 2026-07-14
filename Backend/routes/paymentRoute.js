import express from "express";
const router = express.Router();
import {createdOrder,verfyPayment} from "../controllers/payment.controller.js";

router.post("/order",createdOrder);
router.post("/verify",verfyPayment);

export default router;