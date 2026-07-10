import express from "express";
import { userLogin, userRegister,getUsersDetails} from "../controllers/user.controller.js";
const router = express.Router();
import {protect,admin} from "../middlewares/authMiddleware.js";

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/details",protect,admin, getUsersDetails);

export default router;