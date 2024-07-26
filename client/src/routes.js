import React from 'react';
import HomePage from '../src/pages/HomePage/HomePage';
import AboutPage from '../src/pages/AboutPage/AboutPage';
import ContactPage from '../src/pages/ContactPage/ContactPage';
import CommunityPage from '../src/pages/CommunityPage/CommunityPage';
import Marketplace from '../src/pages/MarketplacePage/Marketplace';
import Account from '../src/pages/AccountPage/Account';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
    <Router> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/account" element={<Account />} />
          {/* Add more routes as needed */}
          {/* <Route path="/about" element={<ComponentName />} /> */}
        </Routes>
    </Router>
  );
};

export default AppRouter;