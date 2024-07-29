import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import AccountMenu from '../../components/AccountMenu/AccountMenu';
import './Account.css';

const AccountPage = () => {
  return (
    <div className="account-container">

        <Navigation />
        <Header />
        
        <div className='top-account-container'>
            <h1>My Account</h1>
        </div>
        <AccountMenu />
    </div>
  );
};

export default AccountPage;