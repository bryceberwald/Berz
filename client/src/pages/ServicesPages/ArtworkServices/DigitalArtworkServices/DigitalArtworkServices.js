import React from 'react';
import '../../../../components/Header/Header';
import '../../../../components/Navigation/Navigation';
import './DigitalArtworkServices.css';
import Header from '../../../../components/Header/Header';
import Navigation from '../../../../components/Navigation/Navigation';

const DigitalArtworkServices = () => {
  return (
    <div className="digital-artwork-container">
        
        <Navigation />
        <Header />
        
        <br></br>

        <div className="top-digital-artwork-container">
            <h1>Digital Artwork Services</h1>
        </div>
        
        <div className='main-content'>
          <section>
            <h2>Our Digital Artwork and/or NFT Services</h2>
            <br></br>
            <h3>This page is currently under construction...</h3>
       
            {/* Add your digital-artwork form or details here */}
          </section>
        </div>

    </div>
  );
};

export default DigitalArtworkServices;