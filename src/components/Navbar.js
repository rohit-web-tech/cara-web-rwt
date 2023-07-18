import React from 'react'
import logo from '../img/logo.webp' ;
import '../css/navbar.css'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
    return (
        <>
        <div id="main-nav" className="flex-box justify-center align-center">
        <div className="nav-bar flex-box align-center">
            <div className="logo">
                <img src={logo} alt="cara"/>
            </div>
            <div className="options flex-box justify-center align-center">
                <ul className="nav-options flex-box justify-center align-center ">
                    <Link to="/" className="active nav-option home-btn">
                        <li>Home</li>
                    </Link>
                    <Link to="/shop" className="nav-option shop-btn">
                        <li>Shop</li>
                    </Link>
                    <Link to="/blogs" className="nav-option blog-btn">
                        <li>Blog</li>
                    </Link>
                    <Link to="/about" className="nav-option about-btn">
                        <li>About</li>
                    </Link>
                    <Link to="/contact" className="nav-option contact-btn">
                        <li>Contact</li>
                    </Link>
                </ul>
                <div className="cart">
                    <Link to="/cart" className="nav-option cart-btn"><i className="fa-sharp fa-solid fa-cart-flatbed-suitcase"></i></Link>
                </div>
                <div className="nav-option-slider" onClick={props.handleShowSideMenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
             </div>   
        </div>
        <div id="side-menu">
            <div className="side-menu flex-box justify-center">
            <ul className="nav-options flex-box align-center flex-column">
                    <Link to="/" className="active nav-option home-btn" onClick={props.handleRemoveSideMenu}>
                        <li>Home</li>
                    </Link>
                    <Link to="/shop" className="nav-option shop-btn" onClick={props.handleRemoveSideMenu}>
                        <li>Shop</li>
                    </Link>
                    <Link to="/blogs" className="nav-option blog-btn" onClick={props.handleRemoveSideMenu}>
                        <li>Blog</li>
                    </Link>
                    <Link to="/about" className="nav-option about-btn" onClick={props.handleRemoveSideMenu}>
                        <li>About</li>
                    </Link>
                    <Link to="/contact" className="nav-option contact-btn" onClick={props.handleRemoveSideMenu}>
                        <li>Contact</li>
                    </Link>
                </ul>
                <div className="close-side-menu" onClick={props.handleRemoveSideMenu}>
                <i className="fa-solid fa-close"></i>
                </div>
            </div>
        </div>
        </>
    )
}
