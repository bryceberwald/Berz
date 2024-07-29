import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import './Marketplace.css';

const Marketplace = () => {
  return (
    <div className="marketplace-container">

        <Navigation />
        <Header />
        
        <div className='top-marketplace-container'>
            <h1>Marketplace Exchange</h1>
        </div>
    </div>
  );
};

export default Marketplace;