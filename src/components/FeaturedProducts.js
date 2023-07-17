import React from 'react'
import '../css/products.css' ;
import Productcard from './Productcard' ;
import f1 from '../img/products/f1.jpg'
import f2 from '../img/products/f2.jpg'
import f3 from '../img/products/f3.jpg'
import f4 from '../img/products/f4.jpg'
import f5 from '../img/products/f5.jpg'
import f6 from '../img/products/f6.jpg'
import f7 from '../img/products/f7.jpg'
import f8 from '../img/products/f8.jpg'

export default function (props) {
  return (
    <div className="main-products-listing flex-box justify-center align-center">
      <div className="products-listing flex-box justify-center align-center flex-column">
      <div className="heading flex-box justify-center align-center flex-column">
        <h1>{props.heading}</h1>
        <p>{props.subtitle}</p>
      </div>
        <div className="product-card-container">
    <Productcard src={f1}/> 
    <Productcard src={f2}/> 
    <Productcard src={f3}/> 
    <Productcard src={f4}/> 
    <Productcard src={f5}/> 
    <Productcard src={f6}/> 
    <Productcard src={f7}/> 
    <Productcard src={f8}/> 
        </div>
      </div>
    </div>
  )
}
