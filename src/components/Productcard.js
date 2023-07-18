import { memo } from 'react';
import React from 'react'
import '../css/products.css';

function Productcard(props) {
  return (
    <div className='product-card flex-box justify-center align-center flex-column'>
      <img src={props.src} alt="this is a image" loading='lazy' className='lazy-img'/>
      <div className="card-text-content flex-box flex-column">
        <h6>Addidas</h6>
        <h5>Cartoon Astonout T-Shirts</h5>
        <div className="card-footer flex-box align-center">
          <div className="rating-pricing flex-box flex-column">
            <div className="five-stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <h5 className="price">$78</h5>
          </div>
          <div className="card-cart">
            <i className="fa-solid fa-shopping-cart" onClick={(e)=>props.setCartItems(e)}></i>
          </div>
        </div>
      </div>
    </div>
  )
}
export default memo(Productcard);