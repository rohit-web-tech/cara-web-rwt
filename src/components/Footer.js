import React from 'react' ;
import '../css/footer.css' ;
import logo from '../img/logo.webp';
import appStore from '../img/pay/app.webp' ;
import googlePlay from '../img/pay/play.webp' ;
import pay from '../img/pay/pay.webp' ;

export default function Footer() {
  return (
    <div id="footer" className='flex-box justify-center align-center flex-column'>
        <div className="footer">
            <div className="footer-contact">
                <div className="logo-footer">
                    <img src={logo} alt=""  className='lazy-img'/>
                </div>
                <div className="contact">
                    <h4 className="heading">Contact</h4>
                    <div className="contact-details flex-box justify-center flex-column">
                    <p className="details-footer"><span className="bold">Address:</span>463 Near by Spaceship Station Sun City Road, Mars</p>
                    <p className="details-footer"><span className="bold">Phone:</span>+287-1827872</p>
                    <p className="details-footer"><span className="bold">Hours:</span>10:00-18:00 Mon-Sat</p>
                    </div>
                </div>
                <div className="social-media">
                    <h4 className="heading">Follow Us</h4>
                    <div className="brands-logo flex-box align-center">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>
            <div className="footer-user-options flex-box">
                <div className="about">
                <h4 className="heading">About</h4>
                    <div className="user-options flex-box flex-column">
                    <p className="details-footer">About Us</p>
                    <p className="details-footer">Delivery Information</p>
                    <p className="details-footer">Privacy Policy</p>
                    <p className="details-footer">Terms & Conditions</p>
                    <p className="details-footer">Contact Us</p>
                    </div>
                </div>
                <div className="my-account">
                <h4 className="heading">My Account</h4>
                    <div className="user-options flex-box flex-column">
                    <p className="details-footer">Sign In</p>
                    <p className="details-footer">View Cart</p>
                    <p className="details-footer">My Wishlist</p>
                    <p className="details-footer">Track My Order</p>
                    <p className="details-footer">Help</p>
                    </div>
                </div>
            </div>
            <div className="install-app">
                <h4 className="heading">Install App</h4>
                    <div className="user-options flex-box flex-column">
                    <p className="details-footer">From App Store and Google Play</p>
                    <div className="app-links flex-box">
                        <img src={appStore} alt="App Store"  className='lazy-img'/>
                        <img src={googlePlay} alt="Google Play"  className='lazy-img'/>
                    </div>
                    <p className="details-footer">Secured Payement Gateways</p>
                    <img src={pay} alt="GateWays"  className='lazy-img'/>
                    </div>
            </div>
        </div>
        <h4>&copy; Cara || Made by <a href="www.rohitweb.tech" target='_blank'>Rohit Web Tech</a></h4>
    </div>
  )
}
