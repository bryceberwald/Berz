import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import './Account.css';

const AccountPage = () => {
  return (
    <div className="account-container">

        <Navigation />
        <Header />
        
        <div className='top-account-container'>
            <h1>My Account & Wallet</h1>
        </div>
    </div>
  );
};

export default AccountPage;