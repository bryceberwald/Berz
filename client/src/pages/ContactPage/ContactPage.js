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
            <h1>Contact</h1>
        </div>
        
        <div className='main-content'>
          <section>
            <h2>Get in Touch</h2>
            <span>Send an email to me, and I'll get back to you as soon as possible.</span>
            <br></br>
            <br></br>
            <label>Owner/CEO : </label><br></br>
            <span className='name-span'>Bryce Berwald</span><br></br><br></br>

            <label>Personal Email &nbsp;: </label><br></br>
            <span className='name-span'>&nbsp;bryce.berwald@berz.io</span><br></br><br></br>

            <label>Our Support Staff &nbsp;: </label><br></br>
            <span className='name-span'>&nbsp;support@berz.io</span><br></br><br></br>

            <label>Our Development Staff &nbsp;: </label><br></br>
            <span className='name-span'>&nbsp;developer@berz.io</span><br></br><br></br>

            <label>Company Phone Number : </label><br></br>
            <span className='name-span'>&nbsp;+1 (xxx) xxx-xxxx</span><br></br><br></br>

            {/* Add your contact form or details here */}
          </section>
        </div>

    </div>
  );
};

export default ContactPage;
