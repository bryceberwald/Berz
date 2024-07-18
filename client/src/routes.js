import React from 'react';
import HomePage from '../src/pages/HomePage/HomePage';
import AboutPage from '../src/pages/AboutPage/AboutPage';
import ContactPage from '../src/pages/ContactPage/ContactPage';
import CommunityPage from '../src/pages/CommunityPage/CommunityPage';
import TechServices from '../src/pages/ServicesPages/TechServices/TechServices';
import AdvertisingServices from '../src/pages/ServicesPages/AdvertisingServices/AdvertisingServices';
import MarketingServices from '../src/pages/ServicesPages/MarketingServices/MarketingServices';
import NFTsMarketplacePage from '../src/pages/NFTsMarketplacePage/NFTsMarketplacePage';
import GraphicDesignServices from '../src/pages/ServicesPages/ArtworkServices/GraphicDesignServices/GraphicDesignServices';
import DigitalArtworkServices from '../src/pages/ServicesPages/ArtworkServices/DigitalArtworkServices/DigitalArtworkServices';
import AdditionalServices from '../src/pages/ServicesPages/AdditionalServices/AdditionalServices';
import SolutionPages from '../src/pages/SolutionsPages/SolutionsPage';
import Account from '../src/pages/AccountPage/Account';
// Add more imports as needed\\

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
    <Router> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/services/technology" element={<TechServices />} />
          <Route path="/services/advertising" element={<AdvertisingServices />} />
          <Route path="/services/marketing" element={<MarketingServices />} />
          {/* <Route path="/services/artwork" element={<componentName></componentName>} /> */}
          <Route path="/services/artwork/digital-artwork" element={<DigitalArtworkServices />} />
          <Route path="/services/artwork/graphic-design" element={<GraphicDesignServices />} />
          <Route path="/services/nfts-marketplace" element={<NFTsMarketplacePage></NFTsMarketplacePage>} />
          <Route path="/services/additional-services" element={<AdditionalServices />} />
          <Route path="/solutions" element={<SolutionPages />} />
          <Route path="/marketplace" element={<NFTsMarketplacePage />} />
          <Route path="/account" element={<Account />} />
          {/* Add more routes as needed */}
          {/* <Route path="/about" element={<ComponentName />} /> */}
        </Routes>
    </Router>
  );
};

export default AppRouter;