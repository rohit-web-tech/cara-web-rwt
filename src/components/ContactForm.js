import React from 'react'
import first from '../img/people/1.webp';
import second from '../img/people/2.webp';
import third from '../img/people/3.webp';
import '../css/contactForm.css' ;

export default function ContactForm() {
    return (
        <div id="contact-us-form" className='flex-box justify-center align-center'>
            <div className="contact-us-form flex-box">
                <div className="contact-form flex-box justify-center flex-column">
                    <p>LEAVE A MESSAGE</p>
                    <h2>We love to hear from you</h2>
                    <form action="#" className="flex-box justify-center flex-column">
                        <input type="text" className="contact-form-input-box" placeholder='Your Name' />
                        <input type="email" className="contact-form-input-box" placeholder='E-mail' />
                        <input type="text" className="contact-form-input-box" placeholder='Subject' />
                        <textarea id="user-message" className="contact-form-input-box" placeholder='Message'></textarea>
                        <input type="submit" value="Submit" id="message-submission" />
                    </form>
                </div>
                <div className="marketing-team flex-box justify-center align-center flex-column">
                    <div className="exicutive flex-box justify-center">
                        <div className="exicutive-image">
                            <img src={first} alt="exicutive" loading='lazy' className='lazy-img'/>
                        </div>
                        <div className="exicutive-details flex-box justify-center flex-column">
                            <h4>John Doe</h4>
                            <p>Senior Marketing Manager</p>
                            <p>Phone : +291-22324343</p>
                            <p>Email : marketing@cara.rohitweb.tech</p>
                        </div>
                    </div>
                    <div className="exicutive flex-box justify-center">
                        <div className="exicutive-image">
                            <img src={second} alt="exicutive" loading='lazy' className='lazy-img'/>
                        </div>
                        <div className="exicutive-details flex-box justify-center flex-column">
                            <h4>William Smith</h4>
                            <p>Senior Marketing Manager</p>
                            <p>Phone : +291-22324343</p>
                            <p>Email : marketing@cara.rohitweb.tech</p>
                        </div>
                    </div>
                    <div className="exicutive flex-box justify-center">
                        <div className="exicutive-image">
                            <img src={third} alt="exicutive" loading='lazy' className='lazy-img'/>
                        </div>
                        <div className="exicutive-details flex-box justify-center flex-column">
                            <h4>Emma Stone</h4>
                            <p>Senior Marketing Manager</p>
                            <p>Phone : +291-22324343</p>
                            <p>Email : marketing@cara.rohitweb.tech</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
