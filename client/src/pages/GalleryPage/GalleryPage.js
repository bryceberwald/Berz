import React from 'react'
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './GalleryPage.css'

const GalleryPage = () => {
  return (
    <div className='gallery-container'>
      <Navigation />
      <Header />
      <h1>Welcome to the Gallery Page!</h1>
    </div>
  );
};

export default GalleryPage;