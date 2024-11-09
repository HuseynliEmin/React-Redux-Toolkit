import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'

function RouterConfig() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product-details/:id' element={<ProductDetails />} />
        </Routes>
    )
}

export default RouterConfig