import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => (
  <section className="Contact" id="contact">
    <h1>Contact</h1>
    <h2>Let's make something awesome!</h2>
    <ContactForm />
  </section>
);

export default Contact;