import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import './NFTsMarketplacePage.css';

const MarketplacePage = () => {
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

export default MarketplacePage;
