import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Contact from './components/Contact'
import About from './components/About'
import Restaurantdetails from './components/Restaurantdetails'
import { CartProvider } from './context/cartContext'
function App() {

  return (
    <>
    <CartProvider>
    <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/restaurant/:id" element={<Restaurantdetails />} />
      </Routes>
      </CartProvider>
    </>
  )
}

export default App
