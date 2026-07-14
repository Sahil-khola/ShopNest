import User from "../models/User.js";
import Order from "../models/Order.js";
import Product from "../models/Product.js";


async function getAnalytics(req, res) {
    try {
        const totalUsers = await User.countDocuments({role:"user"});
        const totalOrders = await Order.countDocuments({});
        const totalProducts = await Product.countDocuments({});
        
        const order = await Order.find({})
        const totalRevenue = order.reduce((total, order) => total + order.totalAmount, 0);

        res.status(200).json({ totalUsers, totalOrders, totalProducts, totalRevenue });        
    } catch (error) {
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
}

export { getAnalytics };