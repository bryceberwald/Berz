import * as React from 'react';

import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import TabComponent from '../../components/TabComponent/TabComponent';
import './GamesPage.css';

export default function GamesPage() {

  return (
    <div className='games-container'>
      <Navigation />
      <Header />
      <br></br>

      <div className="top-games-container">
        <h1>Games Page</h1>
      </div>

      <TabComponent />
      
    </div>
  );
};