import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
// import GraphicDesignServices from '../ServicesPages/ArtworkServices/GraphicDesignServices/GraphicDesignServices';
// import DigitalArtworkServices from '../ServicesPages/ArtworkServices/DigitalArtworkServices/DigitalArtworkServices';
import './NFTsMarketplacePage.css';

const MarketplacePage = () => { 
  return (  // 
    <div className="top-nfts-marketplace-container">
          <Navigation />
          <Header />
     <div className="nfts-marketplace-container">   
      <h1>Marketplace Exchange</h1>

      <div className='main-content'>
          <section>
            <h2>Our Services</h2>

            <p className='page-detail-paragraph'><i>Buy</i>, <i>Sell</i>, <i>Exchange</i><b> NFTs</b> <i> Buy/Sell</i> the new development <b><i>Berzen</i></b> cryptocurrency</p>
            <br />
            <span><b>This page is currently under construction...</b></span>
       
            {/* Add your ads form or details here */}
          </section>
        </div>
    </div>
  </div>
    );
  };

export default MarketplacePage; 