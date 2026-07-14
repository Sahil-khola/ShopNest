import Order from "../models/Order.js";
import sendMail from "../utils/sendMail.js";

async function createProduct(req,res) {
    try {
        const {items,totalAmount,address,paymentId} = req.body;
        if(!items || !totalAmount || !address || !paymentId) {
            return res.status(400).json({ msg: "All fields are required" });
        }else{
            const order = await Order.create({user:req.user._id,items,totalAmount,address,paymentId});
            const message = `Dear ${req.user.name}, \n\n Thank you for Your Order ! Your Order has been Successfully created with the following 
            details \n\n Order Id : ${order._id} \n\n Total Amount : ${order.totalAmount} \n\n Address : ${order.address} \n\n Payment Id : ${order.paymentId} \n\n Thank you for Your Order !`;
            await sendMail(req.user.email,"Order created successfully",message);
            res.status(201).json({ msg: "Order created successfully", order });
        }
    } catch (error) {
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
}
async function getMyOrders(req,res) {
    try {
        const orders = await Order.find({user:req.user._id}).populate("items.productId","name email");
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