import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './ContactPage.css'; // Make sure to import your CSS file

const ContactPage = () => {
  return (
    <div className="contact-container">
        
        <Navigation />
        <Header />
        
        <br></br>

        <div className="top-contact-container">
            <h1>Contact Page</h1>
        </div>
        
        <div className='main-content'>
          <section>
            <h2>Get in Touch</h2>
            <span>Send an email to me, and I'll get back to you as soon as possible.</span>
            <br></br>
            <br></br>
            <label>Name: </label>
            <span className='name-span'>Bryce Berwald / Berz</span><br></br>

            <label>Email: </label>
            <span className='name-span'>&nbsp;support@berz.io</span>

            {/* Add your contact form or details here */}
          </section>
        </div>

    </div>
  );
};

export default ContactPage;
