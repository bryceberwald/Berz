/* eslint-disable jsx-a11y/img-redundant-alt */
/* Header.js */
import React from 'react';
import './Header.css';

const Header = () => {  
  
  const discordImageUrl = 'discord_image.png';
  const discordInviteUrl = 'https://discord.gg/8GtBmHwuE8';

  return (
    <header className="header-container">
      <h1 className="header-h1">Berz</h1>
      <img src="header_logo.jpeg" alt="Berz Personal Website Image" />
      <br></br>
      <a href={discordInviteUrl} target="_blank" rel="noopener noreferrer">
        <img className="discord-image" src={discordImageUrl} alt="Discord" />
      </a>
    </header>
  );
};

export default Header;