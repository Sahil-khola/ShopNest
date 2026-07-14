import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import User from "./models/User.js";
import Product from "./models/Product.js";
import Order from "./models/Order.js";

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    console.log("Clearing existing data...");
    await User.deleteMany({});
    await Product.deleteMany({});
    await Order.deleteMany({});

    // ---------- Users ----------
    const hashedPassword = await bcrypt.hash("Sahi@123", 10);

    const users = await User.insertMany([
      {
        name: "Sahil Khola",
        email: "sahilkhola7202@gmail.com",
        password: hashedPassword,
        role: "admin",
        isVerified: true,
      },
      {
        name: "John Doe",
        email: "john@example.com",
        password: hashedPassword,
        role: "user",
        isVerified: true,
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        password: hashedPassword,
        role: "user",
        isVerified: true,
      },
      {
        name: "Bob Wilson",
        email: "bob@example.com",
        password: hashedPassword,
        role: "user",
        isVerified: false,
      },
    ]);

    console.log(`Inserted ${users.length} users`);

    // ---------- Products ----------
    const products = await Product.insertMany([
      {
        name: "Wireless Headphones",
        description: "Over-ear bluetooth headphones with noise cancellation.",
        price: 2499,
        category: "Electronics",
        stock: 50,
        imageUrl: "https://via.placeholder.com/300?text=Headphones",
        rating: 4.5,
        numReviews: 12,
        createdBy: users[0]._id,
      },
      {
        name: "Smart Watch",
        description: "Fitness tracking smartwatch with heart rate monitor.",
        price: 3999,
        category: "Electronics",
        stock: 30,
        imageUrl: "https://via.placeholder.com/300?text=SmartWatch",
        rating: 4.2,
        numReviews: 8,
        createdBy: users[0]._id,
      },
      {
        name: "Running Shoes",
        description: "Lightweight breathable running shoes for daily use.",
        price: 1799,
        category: "Footwear",
        stock: 100,
        imageUrl: "https://via.placeholder.com/300?text=Shoes",
        rating: 4.0,
        numReviews: 20,
        createdBy: users[0]._id,
      },
      {
        name: "Coffee Mug",
        description: "Ceramic 350ml coffee mug with elegant design.",
        price: 349,
        category: "Home",
        stock: 200,
        imageUrl: "https://via.placeholder.com/300?text=Mug",
        rating: 4.8,
        numReviews: 35,
        createdBy: users[0]._id,
      },
      {
        name: "Backpack",
        description: "Water resistant laptop backpack with multiple compartments.",
        price: 1299,
        category: "Accessories",
        stock: 60,
        imageUrl: "https://via.placeholder.com/300?text=Backpack",
        rating: 4.3,
        numReviews: 15,
        createdBy: users[0]._id,
      },
      {
        name: "Bluetooth Speaker",
        description: "Portable speaker with deep bass and 12h battery life.",
        price: 1499,
        category: "Electronics",
        stock: 40,
        imageUrl: "https://via.placeholder.com/300?text=Speaker",
        rating: 4.1,
        numReviews: 9,
        createdBy: users[0]._id,
      },
    ]);

    console.log(`Inserted ${products.length} products`);

    // ---------- Orders ----------
    const orders = await Order.insertMany([
      {
        user: users[1]._id,
        items: [
          {
            productId: products[0]._id,
            qyt: 1,
            price: products[0].price,
          },
          {
            productId: products[2]._id,
            qyt: 2,
            price: products[2].price,
          },
        ],
        totalAmount: products[0].price + products[2].price * 2,
        address: {
          fullName: "John Doe",
          street: "123 Main Street",
          city: "Mumbai",
          state: "Maharashtra",
          pincode: "400001",
        },
        paymentId: "pay_demo_001",
        status: "delivered",
      },
      {
        user: users[2]._id,
        items: [
          {
            productId: products[1]._id,
            qyt: 1,
            price: products[1].price,
          },
        ],
        totalAmount: products[1].price,
        address: {
          fullName: "Jane Smith",
          street: "456 Park Avenue",
          city: "Delhi",
          state: "Delhi",
          pincode: "110001",
        },
        paymentId: "pay_demo_002",
        status: "shipped",
      },
      {
        user: users[3]._id,
        items: [
          {
            productId: products[3]._id,
            qyt: 3,
            price: products[3].price,
          },
          {
            productId: products[4]._id,
            qyt: 1,
            price: products[4].price,
          },
        ],
        totalAmount: products[3].price * 3 + products[4].price,
        address: {
          fullName: "Bob Wilson",
          street: "789 Lake Road",
          city: "Bengaluru",
          state: "Karnataka",
          pincode: "560001",
        },
        paymentId: "pay_demo_003",
        status: "pending",
      },
    ]);

    console.log(`Inserted ${orders.length} orders`);

    console.log("Seeding completed successfully");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedData();
