import * as React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './ArtistsPage.css';

export default function ArtistsPage() {

  return (
    <div className='Artists-container'>
      <Navigation />
      <Header />
      <br></br>

      <div className="top-Artists-container">
        <h1>Artists Page</h1>
      </div>

      <h4>This page is currently under construction...</h4>
      
    </div>
  );
};