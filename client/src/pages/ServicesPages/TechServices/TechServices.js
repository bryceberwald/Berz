import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import Header from '../../../components/Header/Header';
import './TechServices.css'; // Make sure to import your CSS file

const TechServices = () => {
  return (
    <div className="tech-container">
        
        <Navigation />
        <Header />
        
        <br></br>

        <div className="top-tech-container">
            <h1>Technology Services</h1>
        </div>
        
        <div className='main-content'>
`          <section>
            <h2>Our Tech-related Services</h2>

            <br></br>
            <h3>This page is currently under construction...</h3>
            {/* Add your tech form or details here */}
          </section>
        </div>

    </div>
  );
};

export default TechServices;
