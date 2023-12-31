import React from 'react'
import '../css/products.css' ;
import Productcard from './Productcard' ;
import n1 from '../img/products/n1.webp'
import n2 from '../img/products/n2.webp'
import n3 from '../img/products/n3.webp'
import n4 from '../img/products/n4.webp'
import n5 from '../img/products/n5.webp'
import n6 from '../img/products/n6.webp'
import n7 from '../img/products/n7.webp'
import n8 from '../img/products/n8.webp'

export default function (props) {
  return (
    <div id="products-listing" className="flex-box justify-center align-center">
      <div className="products-listing flex-box justify-center align-center flex-column">
      <div className="heading flex-box justify-center align-center flex-column">
        <h1>{props.heading}</h1>
        <p>{props.subtitle}</p>
      </div>
        <div className="product-card-container">
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