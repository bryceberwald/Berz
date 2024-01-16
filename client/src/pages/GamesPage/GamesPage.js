import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './GamesPage.css';

const GamesPage = () => {
  // Assuming games is an array of Phaser 3 games
  const games = [
    // Game components go here
    // For example: <PhaserGame key={1} />
    <Header key={1} />,
    <Header key={2} />,
    <Header key={3} />,
    <Header key={4} />,
    <Header key={5} />,
    <Header key={6} />,
    // Add as many games as needed
  ];

  return (
    <div className='Games-container'>
      <Navigation />
      <Header />
      <h1>Games Page</h1>
      <div className='Games-wrapper'>
        {games.map((game, index) => (
          <div key={index} className='Game'>
            <h4 className='GameLabel'>Game #{index+1}</h4>
            {game}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;