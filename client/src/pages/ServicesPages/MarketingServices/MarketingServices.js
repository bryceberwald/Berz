import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import Header from '../../../components/Header/Header';
import './MarketingServices.css'; // Make sure to import your CSS file

const MarketingServices = () => {
  return (
    <div className="marketing-container">
        
        <Navigation />
        <Header />
        
        <br></br>

        <div className="top-marketing-container">
            <h1>Marketing Services</h1>
        </div>
        
        <div className='main-content'>
          <section>
            <h2>Our Marketing Services</h2>
            <span>Our marketing services are designed to help you reach your target audience and drive traffic to your website. We offer a variety of marketing options to suit your needs, including display marketing, social media marketing, and search engine marketing. Our team of experts will work with you to create a customized marketing strategy that will help you achieve your business goals.</span>

            <br></br><br></br>
            <h3>This page is currently under construction...</h3>
       
            {/* Add your marketing form or details here */}
          </section>
        </div>

    </div>
  );
};

export default MarketingServices;