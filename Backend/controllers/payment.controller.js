import Razorpay from "razorpay";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

async function createdOrder(req,res) {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });
        const options = {
            amount: req.body.totalAmount * 100,
            currency: "INR",
            receipt:crypto.randomBytes(10).toString("hex"),
        };
       const order = await instance.orders.create(options);
       res.status(200).json({ order });
    } catch (error) {
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
}
async function verfyPayment(req,res) {
    try {
        const {razorpay_order_id,razorpay_payment_id,razorpay_signature} = req.body;
        const generated_signature = crypto.createHash("sha256",process.env.RAZORPAY_KEY_SECRET).update(razorpay_order_id + "|" + razorpay_payment_id).digest("hex");
        if(generated_signature !== razorpay_signature) return res.status(400).json({ msg: "Payment verification failed" });
        
        res.status(200).json({ msg: "Payment verified successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
}

export {createdOrder,verfyPayment};