import React from 'react' ;
import '../css/elementsCard.css';
import image from '../img/banner/b70.webp';

export default function () {
  return (
    <div id="element-card" className="flex-box justify-center aling-center">
            <div className='element-card'>
                <div className="element-content flex-box justify-center flex-column">
                    <h6>Get In Touch</h6>
                    <h1>Visit one of our agency locations or contact us today</h1>
                    <h4>Head Office</h4>
                    <p><i className="fa-solid fa-map"></i> 290 Near By SpaceShip Station Sun City , Mars</p>
                    <p><i className="fa-solid fa-envelope"></i> contact@rohitweb.tech</p>
                    <p><i className="fa-solid fa-phone"></i> +291-28728733</p>
                    <p><i className="fa-solid fa-clock"></i> Monday To Saturday, 10:00AM-6:00PM</p>
                </div>
                <div className="image flex-box justify-center align-center">
                    <img src={image} alt="blog image" loading='lazy' className='lazy-img'/>
                </div>
            </div>
        </div>
  )
}
