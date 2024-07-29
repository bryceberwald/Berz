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
        {/* routes publicly visible*/}
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={ <AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/community" element={<CommunityPage />} />

          {/* routes that exist but not directly linked from website currently */}
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/account" element={<Account />} />

          {/* add more routes as needed, example below... */}
          {/* <Route path="/componentName" element={<ComponentName />} /> */}
        </Routes>
    </Router>
  );
};

export default AppRouter;