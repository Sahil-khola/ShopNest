import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Orders Route");
});

export default router;