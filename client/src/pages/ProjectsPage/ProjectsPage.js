import * as React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './ProjectsPage.css';

export default function ProjectsPage() {

  return (
    <div className='projects-container'>
      <Navigation />
      <Header />
      <br></br>

      <div className="top-projects-container">
        <h1>Projects Page</h1>
      </div>

      <p>This page is currently under construction...</p>
      
    </div>
  );
};