import React from 'react'
import '../css/products.css' ;
import Productcard from './Productcard' ;
import f1 from '../img/products/f1.webp'
import f2 from '../img/products/f2.webp'
import f3 from '../img/products/f3.webp'
import f4 from '../img/products/f4.webp'
import f5 from '../img/products/f5.webp'
import f6 from '../img/products/f6.webp'
import f7 from '../img/products/f7.webp'
import f8 from '../img/products/f8.webp'

export default function (props) {
  return (
    <div className="main-products-listing flex-box justify-center align-center">
      <div className="products-listing flex-box justify-center align-center flex-column">
      <div className="heading flex-box justify-center align-center flex-column">
        <h1>{props.heading}</h1>
        <p>{props.subtitle}</p>
      </div>
        <div className="product-card-container">
    <Productcard src={f1} setCartItems={props.setCartItems}/> 
    <Productcard src={f2} setCartItems={props.setCartItems}/> 
    <Productcard src={f3} setCartItems={props.setCartItems}/> 
    <Productcard src={f4} setCartItems={props.setCartItems}/> 
    <Productcard src={f5} setCartItems={props.setCartItems}/> 
    <Productcard src={f6} setCartItems={props.setCartItems}/> 
    <Productcard src={f7} setCartItems={props.setCartItems}/> 
    <Productcard src={f8} setCartItems={props.setCartItems}/> 
        </div>
      </div>
    </div>
  )
}
