import React, { useState } from 'react';
import './TabComponent.css';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-container">
      <div className="tab-buttons">
        <button
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => handleTabChange('tab1')}
        >
          Game Library
        </button>
        <button
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => handleTabChange('tab2')}
        >
          Dashboard
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'tab1' && (
          <div>
            <h2>Game Library</h2>
            <div className='game-container'></div>
            <div className='game-container'></div>
            <div className='game-container'></div>
            <div className='game-container'></div>
            <div className='game-container'></div>
            <div className='game-container'></div>
          </div>
        )}

        {activeTab === 'tab2' && (
          <div>
            <h2>Dashboard</h2>
            <p>This is the area for the user to interact with...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;