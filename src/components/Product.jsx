import React from 'react'
import "../css/product.css"
import "../App.css"
import { useNavigate } from "react-router-dom"

function Product({ product }) {
    const { id, price, image, title, description } = product
    const Navigate = useNavigate()
    return (
        <div >
            <div className='card'>
                <img className='image' src={image} alt="" />
                <p>{title}</p>
                <h3>{price} USD</h3>
                <button onClick={()=>Navigate("/product-details/"+id)}>detail</button>
            </div>
        </div>
    )
}

export default Product