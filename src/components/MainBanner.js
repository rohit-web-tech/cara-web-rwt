import React from 'react'
import '../css/mainBanner.css'

export default function MainBanner() {
  return (
    <div id="main-banner" className='align-center flex-box justify-center'>
      <div class="banner-content flex-box justify-center flex-column">
        <h4>Trade-in-offer</h4>
        <h1>Super value deals <br/><span class="green">On all products</span></h1>
        <h6>Save more with coupons and up to 70% off</h6>
        <p class="btn flex-box justify-center align-center">Shop Now</p>
      </div>
    </div>
  )
}
