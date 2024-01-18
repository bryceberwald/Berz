import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './GamesPage.css';

const GamesPage = () => {
  
  // Assuming games is an array of Phaser 3 games
  const games = [
    // Game components go here
    // For example: <PhaserGame key={1} />
    // Add as many games as needed
  ];

  return (
    <div className='games-container'>
      <Navigation />
      <Header />
      <br></br>
      <div className="top-games-container">
        <h1>Games Page</h1>
      </div>
      <h3>Currently under construction...</h3>
      <div className='games-wrapper'>
        {games.map((game, index) => (
          <div key={index} className='Game'>
            <h4 className='GameLabel'>Game #{index + 1}</h4>
            {game}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;