/* eslint-disable jsx-a11y/img-redundant-alt */

// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Berz</h1>
        <img src="image_04.jpeg" alt="Banner Image" className="header-banner" />
      </div>
    </header>
  );
};

export default Header;