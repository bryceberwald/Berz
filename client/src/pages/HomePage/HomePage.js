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
            <h1>Home Page</h1>
        </div>

      <div className='main-content'>
        <section>
          <h2>About Me</h2>
          <p>To be completed...</p>
        </section>

        <section>
          <h2>Information</h2>
          <p>To be completed...</p>
        </section>

        <section>
        <h2>Developer Application Submission's - (Ex:/ Email Request)</h2>
        <p>To be completed...</p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
