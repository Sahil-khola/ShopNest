import Product from "../models/Product.model.js";
import cloudinary from "../config/cloudinary.js";

async function getProducts(req,res) {
    try {
        const products = await Product.find();
        res.status(200).json({products});
    } catch (error) {
        res.status(500).json({ msg: "Internal server error" });
    }
}

async function getProductById(req,res) {
    try {
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(404).json({ msg: "Product not found"});
        res.status(200).json({product});
    } catch (error) {
        res.status(500).json({ msg: "Internal server error" });
    }

}

async function createProduct(req,res) {
    const { name, description, price, category, stock } = req.body;
    let imageUrl = "";
    

}


async function updateProduct(req,res) {
    res.send("Product Route");
}

async function deleteProduct(req,res) {
    res.send("Product Route");
}

export {getProducts,getProductById,createProduct,updateProduct,deleteProduct};