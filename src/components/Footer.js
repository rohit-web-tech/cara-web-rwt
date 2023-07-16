import React from 'react' ;
import '../css/footer.css' ;
import logo from '../img/logo.png';
import appStore from '../img/pay/app.jpg' ;
import googlePlay from '../img/pay/play.jpg' ;
import pay from '../img/pay/pay.png' ;

export default function Footer() {
  return (
    <div id="footer" className='flex-box justify-center align-center flex-column'>
        <div class="footer">
            <div class="footer-contact">
                <div class="logo-footer">
                    <img src={logo} alt=""/>
                </div>
                <div class="contact">
                    <h4 class="heading">Contact</h4>
                    <div class="contact-details flex-box justify-center flex-column">
                    <p class="details-footer"><span class="bold">Address:</span>463 Near by Spaceship Station Sun City Road, Mars</p>
                    <p class="details-footer"><span class="bold">Phone:</span>+287-1827872</p>
                    <p class="details-footer"><span class="bold">Hours:</span>10:00-18:00 Mon-Sat</p>
                    </div>
                </div>
                <div class="social-media">
                    <h4 class="heading">Follow Us</h4>
                    <div class="brands-logo flex-box align-center">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>
            <div class="footer-user-options flex-box">
                <div class="about">
                <h4 class="heading">About</h4>
                    <div class="user-options flex-box flex-column">
                    <p class="details-footer">About Us</p>
                    <p class="details-footer">Delivery Information</p>
                    <p class="details-footer">Privacy Policy</p>
                    <p class="details-footer">Terms & Conditions</p>
                    <p class="details-footer">Contact Us</p>
                    </div>
                </div>
                <div class="my-account">
                <h4 class="heading">My Account</h4>
                    <div class="user-options flex-box flex-column">
                    <p class="details-footer">Sign In</p>
                    <p class="details-footer">View Cart</p>
                    <p class="details-footer">My Wishlist</p>
                    <p class="details-footer">Track My Order</p>
                    <p class="details-footer">Help</p>
                    </div>
                </div>
            </div>
            <div class="install-app">
                <h4 class="heading">Install App</h4>
                    <div class="user-options flex-box flex-column">
                    <p class="details-footer">From App Store and Google Play</p>
                    <div class="app-links flex-box">
                        <img src={appStore} alt="App Store"/>
                        <img src={googlePlay} alt="Google Play"/>
                    </div>
                    <p class="details-footer">Secured Payement Gateways</p>
                    <img src={pay} alt="GateWays" />
                    </div>
            </div>
        </div>
        <h4>&copy; Cara || Made by <a href="www.rohitweb.tech" target='_blank'>Rohit Web Tech</a></h4>
    </div>
  )
}
