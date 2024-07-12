import React from 'react';
import '../../../../components/Header/Header';
import '../../../../components/Navigation/Navigation';
import './GraphicDesignServices.css';
import Header from '../../../../components/Header/Header';
import Navigation from '../../../../components/Navigation/Navigation';

const GraphicDesignServices = () => {
  return (
    <div className="graphic-design-container">
        
        <Navigation />
        <Header />
        
        <br></br>

        <div className="top-graphic-design-container">
            <h1>Graphic Design Services</h1>
        </div>
        
        <div className='main-content'>
          <section>
            <h2>Our Graphic Design Services</h2>
            <br></br>
            <h3>This page is currently under construction...</h3>
       
            {/* Add your graphic-design form or details here */}
          </section>
        </div>

    </div>
  );
};

export default GraphicDesignServices;