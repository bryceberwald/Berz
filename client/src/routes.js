import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import CommunityPage from './pages/CommunityPage/CommunityPage';
import TechServices from './pages/ServicesPages/TechServices/TechServices';
import AdvertisingServices from './pages/ServicesPages/AdvertisingServices/AdvertisingServices';
import MarketingServices from './pages/ServicesPages/MarketingServices/MarketingServices';
import GraphicDesignServices from './pages/ServicesPages/ArtworkServices/GraphicDesignServices/GraphicDesignServices';
import DigitalArtworkServices from './pages/ServicesPages/ArtworkServices/DigitalArtworkServices/DigitalArtworkServices';
import AdditionalServices from './pages/ServicesPages/AdditionalServices/AdditionalServices';
import SolutionPages from './pages/SolutionsPages/SolutionsPage';
import NFTsMarketplacePage from './pages/NFTsMarketplacePage/NFTsMarketplacePage';
import Account from './pages/AccountPage/Account';

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
        <Route path="/services/artwork/graphic-design" element={<GraphicDesignServices />} />
        <Route path="/services/artwork/digital-artwork" element={<DigitalArtworkServices />} />
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