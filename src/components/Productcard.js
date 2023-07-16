import React from 'react'
import '../css/products.css';

export default function Productcard(props) {
  return (
    <div className='product-card flex-box justify-center align-center flex-column'>
        <img src={props.src} alt="this is a image" />
        <div class="card-text-content flex-box flex-column">
        <h6>Addidas</h6>
        <h5>Cartoon Astonout T-Shirts</h5>
        <div class="card-footer flex-box align-center">
        <div class="rating-pricing flex-box flex-column">
            <div class="five-stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
            <h5 className="price">$78</h5>
        </div>
        <div class="card-cart">
        <i class="fa-solid fa-shopping-cart"></i>
        </div>
        </div>
        </div>
    </div>
  )
}
