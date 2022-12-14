import React,{useContext} from 'react';
import logo from '../../../assets/images/logo.jpg';
import text from '../../../assets/images/logoText.png';
import './Header.scss';
import { IntlProvider, FormattedMessage } from "react-intl";


const Header = () => {
  return (
    <div className='header' >
      <div >
      <img src={logo} className="header__logo" alt={logo} />
      </div>
      <div>
      <h1>Oscar Sánchez-Marín Baquero</h1>
      {/* <img src={text} className="header__text" alt={text} /> */}
      <p><FormattedMessage id="app.header"/></p> 
      </div>
      
    </div>
  )
}

export default Header 