import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import './Account.css';

const Account = () => {
  return (
    <div className="account-container">

        <Navigation />
        <Header />
        
        <div className='top-account-container'>
            <h1>My Account and Settings</h1>
        </div>
    </div>
  );
};

export default Account;
