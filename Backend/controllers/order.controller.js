import Order from "../models/Order.js";
import sendMail from "../utils/sendMail.js";

async function createProduct(req, res) {
    try {
        const { items, totalAmount, address, paymentId } = req.body;

        if (!Array.isArray(items) || items.length === 0 || !totalAmount || !address || !paymentId) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        const orderItems = items.map((item) => ({
            productId: item.productId || item._id,
            qty: item.qty || item.quantity || 1,
            price: item.price,
        }));

        const order = await Order.create({
            user: req.user._id,
            items: orderItems,
            totalAmount,
            address,
            paymentId,
        });

        const message = `Dear ${req.user.name},\n\nThank you for your order.\n\nOrder Id: ${order._id}\nTotal Amount: ${order.totalAmount}\nPayment Id: ${order.paymentId}\n\nThank you for shopping with ShopNest.`;

        try {
            await sendMail(req.user.email, "Order created successfully", message);
        } catch (mailError) {
            console.error("Order confirmation email failed:", mailError.message);
        }

        res.status(201).json({ msg: "Order created successfully", order });
    } catch (error) {
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
}
async function getMyOrders(req,res) {
    try {
        const orders = await Order.find({user:req.user._id}).populate("items.productId","name price imageUrl");
        res.status(200).json({ orders });
    } catch (error) {
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
}
async function getAllOrders(req,res) {
    try {
        const orders = await Order.find().populate("user","name email");
        res.status(200).json({ orders });
    } catch (error) {
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
}
async function updateOrderStatus(req,res) {
    try {
        const {status} = req.body;
        const order = await Order.findById(req.params.id);
        if(!order) return res.status(404).json({ msg: "Order not found" });
        order.status = status;
        await order.save();
        res.status(200).json({ msg: "Order status updated successfully", order });
    } catch (error) {
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
}

export { createProduct, getMyOrders, getAllOrders, updateOrderStatus };
