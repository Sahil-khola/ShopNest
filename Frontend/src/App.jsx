import './styles/global.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from  './pages/Home'
import About from './pages/About'
import ReturnPolicy from './pages/ReturnPolicy'
import Disclamer from './pages/Disclamer'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductDetails from './pages/ProductDetails'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderSuccess from './pages/OrderSuccess'
import Profile from './pages/Profile'

//admin pages
import AdminDashboard from './admin/AdminDashboard'
import AdminUsers from './admin/AdminUsers'
import AddProduct from './admin/AddProduct'
import EditProduct from './admin/EditProduct'
import AdminOrder from './admin/AdminOrder'
import AdminProducts from './admin/AdminProducts'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/return" element={<ReturnPolicy/>} />
        <Route path="/disclaimer" element={<Disclamer/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/Checkout" element={<Checkout/>} />
        <Route path="/ordersuccess" element={<OrderSuccess/>} />
        <Route path="/profile" element={<Profile/>} />

        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/admin/users" element={<AdminUsers/>} />
        <Route path="/admin/add-product" element={<AddProduct/>} />
        <Route path="/admin/edit-product/:id" element={<EditProduct/>} />
        <Route path="/admin/orders" element={<AdminOrder/>} />
        <Route path="/admin/products" element={<AdminProducts/>} />


      </Routes>
      <Footer />
    </Router>
  )
}

export default App


