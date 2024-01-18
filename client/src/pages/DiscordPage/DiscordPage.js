import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './DiscordPage.css';

const DiscordPage = () => {
  const discordImageUrl = 'discord_image.png';
  const discordInviteUrl = 'https://discord.gg/8GtBmHwuE8';

  return (
    <div className="discord-container">
      <Navigation />
      <Header />
      <br></br>

      <div className="top-discord-container">
        <h1>Discord Page</h1>
      </div>

      <div className='main-content'>
        {/* Use the <a> element to make the image clickable */}
        <a href={discordInviteUrl} target="_blank" rel="noopener noreferrer">
          <img src={discordImageUrl} alt="Discord" />
        </a>
      </div>
    </div>
  );
};

export default DiscordPage;