/* eslint-disable jsx-a11y/img-redundant-alt */

// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
        <h1 className="header-h1">Berz</h1>
        <img className="header-banner-img" src="image_04.jpeg" alt="Banner Image" />
    </header>
  );
};

export default Header;