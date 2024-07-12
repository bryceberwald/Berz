import React from 'react';
import Header from '../../../components/Header/Header';
import Navigation from '../../../components/Navigation/Navigation';
import './AdditionalServices.css';

const AdditionalServices = () => {
  return (
    <div className="additional-services-container">

        <Navigation />
        <Header />
        
        <div className='top-additional-services-container'>
            <h1>Additional Services</h1>
        </div>
    </div>
  );
};

export default AdditionalServices;