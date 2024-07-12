import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import Header from '../../../components/Header/Header';
import './AdvertisingServices.css'; // Make sure to import your CSS file

const AdvertisingServices = () => {
  return (
    <div className="ads-container">
        
        <Navigation />
        <Header />
        
        <br></br>

        <div className="top-ads-container">
            <h1>Our Advertising Services</h1>
        </div>
        
        <div className='main-content'>
          <section>
            <h2>Our Services</h2>
            <span>Our advertising services are designed to help you reach your target audience and drive traffic to your website. We offer a variety of advertising options to suit your needs, including display ads, social media ads, and search engine marketing. Our team of experts will work with you to create a customized advertising strategy that will help you achieve your business goals.</span>

            <br></br><br></br>
            <h3>This page is currently under construction...</h3>
       
            {/* Add your ads form or details here */}
          </section>
        </div>

    </div>
  );
};

export default AdvertisingServices;