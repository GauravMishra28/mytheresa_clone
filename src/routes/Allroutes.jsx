import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function Allroutes() {
  return (
    <div>
        <Routes>
            <Route to="/" element={<h1>Home</h1>}/>
            <Route to="/signup" element={<h1>Signup</h1>}/>
            <Route to="/login" element={<h1>Login</h1>}/>
            <Route to="/products" element={<h1>Product</h1>}/>
            <Route to="/product/:id" element={<h1>Single Page</h1>}/>
            <Route to="/cart" element={<h1>Cart</h1>}/>
            <Route to="/payment" element={<h1>payment</h1>}/>
        </Routes>
    </div>
  )
}
