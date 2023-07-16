import React from 'react' ;
import '../css/newsletters.css'

export default function () {
  return (
    <div id="news-container" className='flex-box justify-center align-center'>
      <div class="news-container flex-box align-center">
        <div class="news-text flex-box justify-center align-center flex-column">
            <h3>Sign Up For Newsletters</h3>
            <h6>Get E-mail udates about our latest shop and <span class="golden">special offers</span>.</h6>
        </div>
        <form action="#" id="email-get">
            <input type="text" placeholder="Your email address" class="email-input" />
            <input type="submit" value="Sign Up" className='email-signup-btn' />
        </form>
      </div>
    </div>
  )
}
