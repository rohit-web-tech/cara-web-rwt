import React from 'react'
import '../css/mainBanner.css'
import {Link} from 'react-router-dom' ;

export default function MainBanner() {
  return (
    <div id="main-banner" className='align-center flex-box justify-center'>
      <div className="banner-content flex-box justify-center flex-column">
        <h4>Trade-in-offer</h4>
        <h1>Super value deals <br/><span className="green">On all products</span></h1>
        <h6>Save more with coupons and up to 70% off</h6>
        <Link to="/shop" id="underline" ><p className="btn flex-box justify-center align-center">Shop Now</p></Link>
      </div>
    </div>
  )
}
