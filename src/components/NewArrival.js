import React from 'react'
import '../css/products.css' ;
import Productcard from './Productcard' ;
import n1 from '../img/products/n1.jpg'
import n2 from '../img/products/n2.jpg'
import n3 from '../img/products/n3.jpg'
import n4 from '../img/products/n4.jpg'
import n5 from '../img/products/n5.jpg'
import n6 from '../img/products/n6.jpg'
import n7 from '../img/products/n7.jpg'
import n8 from '../img/products/n8.jpg'

export default function (props) {
  return (
    <div id="products-listing" className="flex-box justify-center align-center">
      <div className="products-listing flex-box justify-center align-center flex-column">
      <div className="heading flex-box justify-center align-center flex-column">
        <h1>{props.heading}</h1>
        <p>{props.subtitle}</p>
      </div>
        <div className="product-card-container">
    <Productcard src={n1}/> 
    <Productcard src={n2}/> 
    <Productcard src={n3}/> 
    <Productcard src={n4}/> 
    <Productcard src={n5}/> 
    <Productcard src={n6}/> 
    <Productcard src={n7}/> 
    <Productcard src={n8}/> 
        </div>
      </div>
    </div>
  )
}