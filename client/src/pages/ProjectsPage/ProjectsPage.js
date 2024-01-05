import React from 'react'
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <div className='projects-container'>
      <Navigation />
      <Header />
      <h1>Welcome to the Projects page!</h1>
    </div>
  );
};

export default ProjectsPage;