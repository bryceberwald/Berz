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
            <h1>Advertisement Support</h1>
        </div>
        
        <div className='main-content'>
          <section>
            <h2>Our Services</h2>

            <h2>This page is currently under construction...</h2>
       
            {/* Add your ads form or details here */}
          </section>
        </div>

    </div>
  );
};

export default AdvertisingServices;