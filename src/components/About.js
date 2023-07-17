import React from 'react'
import '../css/elementsCard.css';
import image from '../img/about/a6.jpg';

export default function About() {
    return (
        <div id="element-card" className="flex-box justify-center aling-center">
            <div className='element-card'>
                <div className="image flex-box justify-center align-center">
                    <img src={image} alt="blog image" />
                </div>
                <div className="element-content flex-box justify-center flex-column">
                    <h1>Who We Are ?</h1>
                    <p className="about-us">We are an ecommerce company that provides customers with the best products and services. Our mission is to provide customers with the highest quality products and services at the most competitive prices. We strive to make our customers’ shopping experience as convenient and enjoyable as possible. We offer a wide selection of products from top brands and we are constantly expanding our selection to meet the needs of our customers. Our customer service team is always available to answer any questions or concerns you may have. We are committed to providing our customers with the best shopping experience possible. </p><h5>--Continue Reading--</h5>
                </div>
            </div>
        </div>
    )
}
