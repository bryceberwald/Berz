import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './DiscordPage.css';

const DiscordPage = () => {
  return (
    <div className="discord-container">
        
        <Navigation />
        <Header />
        
        <br></br>

        <div className="top-discord-container">
            <h1>Discord Page</h1>
        </div>
        
        <div className='main-content'>
            <h2>Currently under construction...</h2>
        </div>

    </div>
  );
};

export default DiscordPage;