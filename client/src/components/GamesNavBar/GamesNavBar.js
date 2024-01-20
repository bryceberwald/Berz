import React from 'react';
import './GamesNavBar.css'; // You can create a CSS file for styling

const GamesNavBar = () => {

  const options = [
    'Action',
    'Adventure',
    'RPG',
    'Strategy',
    'Simulation',
    'Sports',
    'Puzzle',
    // Add more options as needed
  ];

  return (
    <div className="games-navbar">
      <h2>Categories</h2>
      <div className="options-list">
        <ul>
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GamesNavBar;