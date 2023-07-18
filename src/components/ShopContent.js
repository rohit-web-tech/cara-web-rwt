import React from 'react';
import '../css/products.css';
import '../css/shop.css';
import Productcard from './Productcard';
import f1 from '../img/products/f1.webp'
import f2 from '../img/products/f2.webp'
import f3 from '../img/products/f3.webp'
import f4 from '../img/products/f4.webp'
import f5 from '../img/products/f5.webp'
import f6 from '../img/products/f6.webp'
import f7 from '../img/products/f7.webp'
import f8 from '../img/products/f8.webp'
import n1 from '../img/products/n1.webp'
import n2 from '../img/products/n2.webp'
import n3 from '../img/products/n3.webp'
import n4 from '../img/products/n4.webp'
import n5 from '../img/products/n5.webp'
import n6 from '../img/products/n6.webp'
import n7 from '../img/products/n7.webp'
import n8 from '../img/products/n8.webp'

export default function ShopContent(props) {
    return (
        <div  className=" main-products-listing shop-products-container flex-box justify-center align-center">
            <div className="products-listing flex-box justify-center align-center flex-column">
                <div className="product-card-container">
                    <Productcard src={f1} setCartItems={props.setCartItems}/>
                    <Productcard src={f2} setCartItems={props.setCartItems}/>
                    <Productcard src={f3} setCartItems={props.setCartItems}/>
                    <Productcard src={f4} setCartItems={props.setCartItems}/>
                    <Productcard src={f5} setCartItems={props.setCartItems}/>
                    <Productcard src={f6} setCartItems={props.setCartItems}/>
                    <Productcard src={f7} setCartItems={props.setCartItems}/>
                    <Productcard src={f8} setCartItems={props.setCartItems}/>
                    <Productcard src={n1} setCartItems={props.setCartItems}/>
                    <Productcard src={n2} setCartItems={props.setCartItems}/>
                    <Productcard src={n3} setCartItems={props.setCartItems}/>
                    <Productcard src={n4} setCartItems={props.setCartItems}/>
                    <Productcard src={n5} setCartItems={props.setCartItems}/>
                    <Productcard src={n6} setCartItems={props.setCartItems}/>
                    <Productcard src={n7} setCartItems={props.setCartItems}/>
                    <Productcard src={n8} setCartItems={props.setCartItems}/>
                </div>
            </div>
        </div>
    )
}
