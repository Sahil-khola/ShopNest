import express from "express";
const router = express.Router();
import { protect, admin} from "../middlewares/authMiddleware.js";
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

// all products
router.route("/").get(getProducts).post(protect, admin, createProduct);

// specific product
router.route("/:id").get(getProductById).put(protect, admin, updateProduct).delete(protect, admin, deleteProduct);

export default router;