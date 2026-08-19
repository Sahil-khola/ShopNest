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
        name: 'Wireless Noise-Cancelling Headphones',
        description: 'Immersive sound experience with advanced active noise cancellation.',
        price: 299.99,
        category: 'Electronics',
        stock: 15,
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.8,
        numReviews: 24,
        createdBy: users[0]._id
      },
      {
        name: 'Minimalist Modern Chair',
        description: 'A stylish and comfortable addition to any contemporary living room.',
        price: 150.00,
        category: 'Furniture',
        stock: 30,
        imageUrl: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.2,
        numReviews: 12,
        createdBy: users[0]._id
      },
      {
        name: 'Professional DSLR Camera',
        description: 'Capture stunning moments with high-resolution clarity and speed.',
        price: 1199.99,
        category: 'Electronics',
        stock: 8,
        imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.9,
        numReviews: 50,
        createdBy: users[0]._id
      },
      {
        name: 'Classic White Sneakers',
        description: 'Versatile and comfortable, a staple for any casual outfit.',
        price: 85.00,
        category: 'Clothing',
        stock: 50,
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.5,
        numReviews: 89,
        createdBy: users[0]._id
      },{
  name: 'Smart Fitness Watch',
  description: 'Track your health and fitness with advanced sensors.',
  price: 199.99,
  category: 'Electronics',
  stock: 20,
  imageUrl: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  ratings: 4.6,
  numReviews: 35,
  createdBy: users[0]._id
},
      {
        name: 'Classic White Sneakers',
        description: 'Versatile and comfortable, a staple for any casual outfit.',
        price: 85.00,
        category: 'Clothing',
        stock: 50,
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.5,
        numReviews: 89,
        createdBy: users[0]._id
      },
      {
        name: 'Smart Fitness Watch',
        description: 'Track your health and fitness with advanced sensors.',
        price: 199.99,
        category: 'Electronics',
        stock: 20,
        imageUrl: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.6,
        numReviews: 35,
        createdBy: users[0]._id
      }
    ]);

    console.log(`Inserted ${products.length} products`);

    // ---------- Orders ----------
    const orders = await Order.insertMany([
      {
        user: users[1]._id,
        items: [
          {
            productId: products[0]._id,
            qty: 1,
            price: products[0].price,
          },
          {
            productId: products[2]._id,
            qty: 2,
            price: products[2].price,
          },
        ],
        totalAmount: products[0].price + products[2].price * 2,
        address: {
          fullName: "John Doe",
          street: "123 Main Street",
          city: "Mumbai",
          state: "Maharashtra",
          postalCode: "400001",
          country: "India",
        },
        paymentId: "pay_demo_001",
        status: "delivered",
      },
      {
        user: users[2]._id,
        items: [
          {
            productId: products[1]._id,
            qty: 1,
            price: products[1].price,
          },
        ],
        totalAmount: products[1].price,
        address: {
          fullName: "Jane Smith",
          street: "456 Park Avenue",
          city: "Delhi",
          state: "Delhi",
          postalCode: "110001",
          country: "India",
        },
        paymentId: "pay_demo_002",
        status: "shipped",
      },
      {
        user: users[3]._id,
        items: [
          {
            productId: products[3]._id,
            qty: 3,
            price: products[3].price,
          },
          {
            productId: products[4]._id,
            qty: 1,
            price: products[4].price,
          },
        ],
        totalAmount: products[3].price * 3 + products[4].price,
        address: {
          fullName: "Bob Wilson",
          street: "789 Lake Road",
          city: "Bengaluru",
          state: "Karnataka",
          postalCode: "560001",
          country: "India",
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
