import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './BiographyPage.css';

const biographyPage = () => {
  return (
    <div className="biography-container">
        
        <Navigation />
        <Header />
        <br></br>

        <div className='top-biography-container'>
            <h1>Biography Page</h1>
        </div>

        <div className='main-content'>
          <section>
              <h2>Berz's Personal Biography</h2>
              <p>1. Past</p>              
              <p>2. Present</p>
              <p>3. Future</p>
          </section>
        </div>
    </div>
  );
};

export default biographyPage;