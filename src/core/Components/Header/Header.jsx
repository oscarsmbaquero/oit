import React from 'react';
import logo from '../../../assets/images/logo.jpg';
import text from '../../../assets/images/logoText.png';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div>
      <img src={logo} className="header__logo" alt={logo} />
      </div>
      <div>
      <img src={text} className="header__text" alt={text} />
      </div>
      
    </div>
  )
}

export default Header