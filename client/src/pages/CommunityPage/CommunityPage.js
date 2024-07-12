import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import './CommunityPage.css';

const CommunityPage = () => {
  return (
    <div className="community-container">

        <Navigation />
        <Header />
        
        <div className='top-community-container'>
            <h1>Community Center</h1>
        </div>
    </div>
  );
};

export default CommunityPage;
