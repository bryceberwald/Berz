import React from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';

const HomePage = () => {
  return (
    <div className="home-container">

        <Navigation />
        <Header />
        <br></br>
        
        <div className='top-home-container'>
            <h1>Home</h1>
        </div>

      <div className='main-content'>
        <section>
          <h2>General Overview</h2>
          <p>
            content goes here...
          </p>
        </section>

        <section>
          <h2>Additional Information</h2>
          <p>
            content goes here...    
          </p>
        </section>
        <section>
          <h2>Our Mission</h2>
          <p>
            content goes here...    
          </p>        
        </section>
      </div>
    </div>
  );
};

export default HomePage;
