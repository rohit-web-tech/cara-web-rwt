import React from 'react';
import '../css/products.css';
import '../css/shop.css';
import Productcard from './Productcard';
import f1 from '../img/products/f1.jpg'
import f2 from '../img/products/f2.jpg'
import f3 from '../img/products/f3.jpg'
import f4 from '../img/products/f4.jpg'
import f5 from '../img/products/f5.jpg'
import f6 from '../img/products/f6.jpg'
import f7 from '../img/products/f7.jpg'
import f8 from '../img/products/f8.jpg'
import n1 from '../img/products/n1.jpg'
import n2 from '../img/products/n2.jpg'
import n3 from '../img/products/n3.jpg'
import n4 from '../img/products/n4.jpg'
import n5 from '../img/products/n5.jpg'
import n6 from '../img/products/n6.jpg'
import n7 from '../img/products/n7.jpg'
import n8 from '../img/products/n8.jpg'

export default function ShopContent() {
    return (
        <div  className=" main-products-listing shop-products-container flex-box justify-center align-center">
            <div class="products-listing flex-box justify-center align-center flex-column">
                <div class="product-card-container">
                    <Productcard src={f1} />
                    <Productcard src={f2} />
                    <Productcard src={f3} />
                    <Productcard src={f4} />
                    <Productcard src={f5} />
                    <Productcard src={f6} />
                    <Productcard src={f7} />
                    <Productcard src={f8} />
                    <Productcard src={n1} />
                    <Productcard src={n2} />
                    <Productcard src={n3} />
                    <Productcard src={n4} />
                    <Productcard src={n5} />
                    <Productcard src={n6} />
                    <Productcard src={n7} />
                    <Productcard src={n8} />
                </div>
            </div>
        </div>
    )
}
