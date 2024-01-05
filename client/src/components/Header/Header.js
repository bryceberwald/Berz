/* eslint-disable jsx-a11y/img-redundant-alt */

// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
        <h1 className="header-h1">Berz</h1>
        <img src="header_logo.jpeg" alt="Berz Personal Website Image" />
    </header>
  );
};

export default Header;