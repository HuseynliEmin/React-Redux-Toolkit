import React, { useState } from 'react'
import "../css/header.css"
import '../App.css'
import { FaBasketShopping } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';


function Header() {
    const [theme, setTheme] = useState(false)
    const navigate = useNavigate()
    const { products } = useSelector((store) => store.basket)
    const changeTheme = () => {
        const root = document.querySelector("#root")
   
        if (theme) {
            root.style.backgroundColor = "black"
            root.style.color = "#fff"
        } else {
            root.style.backgroundColor = "#fff"
            root.style.color = "black"
        }

        setTheme(!theme)
    }


    return (
        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
            <div className='flex-row'>
                <img onClick={() => navigate("/")} className='logo' src="./src/images/logoImage.png" alt="" />
                <p className='logo-text' ></p>
            </div>
            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='search' style={theme ? { color: "black" } : { color: "white" }} />
                <div className='icon'>
                    {theme ? <IoSunnyOutline onClick={changeTheme} /> : <FaMoon onClick={changeTheme} />}
                    <Badge badgeContent={products.length} color="primary">
                        <FaBasketShopping />
                    </Badge>

                </div>

            </div>
        </div>
    )
}

export default Header