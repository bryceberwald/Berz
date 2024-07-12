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
            <h1>Berz's Marketplace Center</h1>
        </div>
    </div>
  );
};

export default MarketplacePage;
