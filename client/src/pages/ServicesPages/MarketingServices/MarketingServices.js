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
            <h1>Marketing Support</h1>
        </div>
        
        <div className='main-content'>
          <section>
            <h2>Our Services</h2>
            <h2>This page is currently under construction...</h2>
       
            {/* Add your marketing form or details here */}
          </section>
        </div>

    </div>
  );
};

export default MarketingServices;