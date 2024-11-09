import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllProduct } from '../redux/slices/ProductSlice'
import Product from './Product'
export default function ProductList() {
    const dispatch = useDispatch()
    const   {products}   = useSelector((store) => store.products)
 

    useEffect(() => {
        dispatch(getAllProduct())
    }, [])
    return (
        <div className='flex-row' style={{flexWrap:"wrap",gap:"20px"}}>
            {products?.map(product=>(
           <Product key={product.id} product={product}/>
            ))}
        </div>
    )
}
