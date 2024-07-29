/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './AboutPage.css';

const aboutPage = () => {
  return (
    <div className="about-container">
        
        <Navigation />
        <Header />
        <br></br>

        <div className='top-about-container'>
            <h1>Digital Assets</h1>
        </div>

        <div className='main-content'>
          <section>
              <h2>Topic #1</h2>
              <p>content goes here...</p>
          </section>

          <section>
              <h2>Topic #2</h2>
              <p>content goes here...</p>
          </section>

          <section>
              <h2>Topic #3</h2>
              <p>content goes here...</p>
          </section>          
          
          <section>
              <h2>Topic #4</h2>
              <p>content goes here...</p>
          </section>
          <br></br>
          <h1>Company's Geographic Location - Orange County, CA</h1>
          <br></br>
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d46292.26475895748!2d-117.9966637387506!3d33.76986970582969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1720294815137!5m2!1sen!2sus" width="100%" height="750px"></iframe>
        </div>
    </div>
  );
};
 
export default aboutPage;