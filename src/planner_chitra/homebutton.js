import React from 'react';
import './home-icon.png';

const HomeButton = () => {
  return (
    <div className="banner">
      <button className="home-button" style={{ marginLeft: '30px', marginTop: '15px' }}>
        <img src={require('./home-icon.png')} alt="home" className="home-icon" width="30" height="30" />
      </button>
    </div>
  );
};

export default HomeButton;
