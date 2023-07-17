import React from 'react' ;
import TopBanner from './TopBanner';
import Location from './Location';
import ContactForm from './ContactForm';

export default function ContactPage(props) {
  props.triggerLoader();
  props.setCurrentPage("contact-btn"); 
  return (
    <>
    <TopBanner title="#let's_talk" subtitle="Leave A Message.We love to hear from you!" type="about" />
    <Location />
    <ContactForm />
    </>
  )
}
