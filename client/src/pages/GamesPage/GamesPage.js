import React from 'react'
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './GamesPage.css';

const GamesPage = () => {
  return (
    <div className='Games-container'>
      <Navigation />
      <Header />
      <h1>Games Page</h1>
    </div>
  );
};

export default GamesPage;