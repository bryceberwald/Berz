import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import './SolutionsPage.css';

const SolutionsPage = () => {
  return (
    <div className="solutions-container">

        <Navigation />
        <Header />
        
        <div className='top-solutions-container'>
            <h1>Solutions</h1>
            {/* <h1>Tangible & non-Tangible Solutions</h1> */}
        </div>
    </div>
  );
};

export default SolutionsPage;
