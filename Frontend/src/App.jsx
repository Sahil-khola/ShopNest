import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from  './pages/Home'
import './styles/global.css'
import About from './pages/About'
import ReturnPolicy from './pages/ReturnPolicy'
import Disclamer from './pages/Disclamer'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/return" element={<ReturnPolicy/>} />
        <Route path="/disclaimer" element={<Disclamer/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
