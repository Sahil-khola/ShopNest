import Product from "../models/Product.js";
import cloudinary from "../config/cloudinary.js";

async function getProducts(req, res) {
  try {
    const product = await Product.find({});
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getProductById(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ msg: "Product not found" });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
}

async function createProduct(req, res) {
 try {
  const { name, description, price, category, stock } = req.body;
  const {image} = req.files;

  // Validate input
  if (!name || !description || !price || !category || !stock) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  if(!image) return res.status(400).json({ msg: "Image is required" });
  
  // Upload image to cloudinary
  const result = await cloudinary.uploader.upload(image.tempFilePath);
  const imageUrl = result.secure_url;
  const newProduct = await Product.create({
    name,
    description,
    price,
    category,
    stock,
    imageUrl,
  });
  res.status(200).json({ msg: "Product created successfully", product: newProduct });
  console.log(req.user);
 } catch (error) {
  res.status(500).json({ msg: "Internal server error" ,error: error.message});
 }
}

async function updateProduct(req, res) {
   const {id} = req.params
   
   const { name, description, price, category, stock } = req.body;
   const {image} = req.files;

   if(!image) return res.status(400).json({ msg: "Image is required" });
   const result = await cloudinary.uploader.upload(image.tempFilePath);
   const imageUrl = result.secure_url;
    
   try {
    const product = await Product.findById(id);
    if(!product) return res.status(404).json({ msg: "Product not found" });
    if(product){
       product.name = name || product.name;
       product.description = description || product.description;
       product.price = price || product.price;
       product.category = category || product.category;
       product.stock = stock || product.stock;
       product.imageUrl = imageUrl || product.imageUrl;
       await product.save();
       res.status(200).json({ msg: "Product updated successfully", product });
    }
   } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
   }

}

async function deleteProduct(req, res) {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product) return res.status(404).json({ msg: "Product not found" });
        res.status(200).json({ msg: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Internal server error" });
    }
}


export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
