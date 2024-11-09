import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/ProductSlice'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket } from '../redux/slices/basketSlice';

function ProductDetails() {
    const { id } = useParams()
    const { products, selectedProduct } = useSelector((store) => store.products)

    const dispatch = useDispatch()

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }

    }
    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }
        dispatch(addToBasket(payload))
    }



    useEffect(() => {
        getProductById()
    }, [products, id])

    const getProductById = () => {
        products?.map((item) => {
            if (item.id == id) {
                dispatch(setSelectedProduct(item))
            }
        })
    }


    const { category, price, image, description, title } = selectedProduct

    return (
        <div className='responsive-card' style={{ marginTop: "30px", display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <div>
                <img style={{ marginRight: "40px", width: "400px" }} src={image} alt={title} />
            </div>
            <div>
                <h1 style={{ fontFamily: "arial" }}>{title}</h1>
                <p style={{ fontFamily: "arial", fontSize: "20px" }}>{description}</p>
                <h1 style={{ fontFamily: "arial", fontSize: "50px", fontWeight: "bold", color: "red" }}>
                    {price} USD
                </h1>
                <div className='flex-row' style={{ fontSize: "30px", gap: "20px", justifyContent: "start" }}>
                    <CiCirclePlus onClick={increment} style={{ cursor: "pointer" }} /> <span>{count}</span> <CiCircleMinus onClick={decrement} style={{ cursor: "pointer" }} />
                </div>
                <div onClick={addBasket} className='button '>Add to Basket</div>
            </div>
        </div>
    )
}

export default ProductDetails
