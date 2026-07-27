import express from "express";
const router = express.Router();
import { protect, admin} from "../middlewares/authMiddleware.js";
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

// all products
router.get("/",  getProducts);
router.post("/", protect, admin, createProduct);
router.get("/:id", getProductById);
router.delete("/:id", protect, admin, deleteProduct);
router.put("/:id", protect, admin, updateProduct);

// specific product
// router.route("/").get(getProducts).post(protect, admin, createProduct);
// router.route("/:id").get(getProductById).put(protect, admin, updateProduct).delete(protect, admin, deleteProduct);

export default router;