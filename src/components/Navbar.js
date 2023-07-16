import React from 'react'
import logo from '../img/logo.png' ;
import '../css/navbar.css'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
    return (
        <>
        <div id="main-nav" className="flex-box justify-center align-center">
        <div className="nav-bar flex-box align-center">
            <div class="logo">
                <img src={logo} alt="cara" />
            </div>
            <div class="options flex-box justify-center align-center">
                <ul class="nav-options flex-box justify-center align-center ">
                    <Link to="/" className="active nav-option home-btn">
                        <li>Home</li>
                    </Link>
                    <Link to="/shop" className="nav-option shop-btn">
                        <li>Shop</li>
                    </Link>
                    <Link to="/blogs" className="nav-option blog-btn">
                        <li>Blog</li>
                    </Link>
                    <Link to="/" className="nav-option about-btn">
                        <li>About</li>
                    </Link>
                    <Link to="/" className="nav-option contact-btn">
                        <li>Contact</li>
                    </Link>
                </ul>
                <div class="cart nav-option">
                    <Link to="/"><i class="fa-sharp fa-solid fa-cart-flatbed-suitcase"></i></Link>
                </div>
                <div class="nav-option-slider" onClick={props.handleShowSideMenu}>
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
             </div>   
        </div>
        <div id="side-menu">
            <div class="side-menu flex-box justify-center">
            <ul class="nav-options flex-box align-center flex-column">
                    <Link to="/" className="active nav-option home-btn" onClick={props.handleRemoveSideMenu}>
                        <li>Home</li>
                    </Link>
                    <Link to="/shop" className="nav-option shop-btn" onClick={props.handleRemoveSideMenu}>
                        <li>Shop</li>
                    </Link>
                    <Link to="/blogs" className="nav-option blog-btn" onClick={props.handleRemoveSideMenu}>
                        <li>Blog</li>
                    </Link>
                    <Link to="/" className="nav-option about-btn" onClick={props.handleRemoveSideMenu}>
                        <li>About</li>
                    </Link>
                    <Link to="/" className="nav-option contact-btn" onClick={props.handleRemoveSideMenu}>
                        <li>Contact</li>
                    </Link>
                </ul>
                <div class="close-side-menu" onClick={props.handleRemoveSideMenu}>
                <i class="fa-solid fa-close"></i>
                </div>
            </div>
        </div>
        </>
    )
}
