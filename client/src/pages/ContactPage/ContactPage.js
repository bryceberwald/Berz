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

      <section>
        <h2>Get in Touch</h2>
        <p>
          <i>Send an email to me, and I'll get back to you as soon as possible.</i>
        </p>
        <br></br>
        <label>Name: </label>
        <text>Bryce Berwald / Berz</text><br></br>

        <label>Email: </label>
        <text>support@berz.io</text>

        {/* Add your contact form or details here */}
      </section>

    </div>
  );
};

export default ContactPage;
