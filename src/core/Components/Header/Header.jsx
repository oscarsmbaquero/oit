import React, { useContext } from "react";
import logo from "../../../assets/images/logo.jpg";
import text from "../../../assets/images/logoText.png";
import "./Header.scss";
import { IntlProvider, FormattedMessage } from "react-intl";
import I18n from "../../../context/i18n/I18n";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} className="header__logo" alt={logo} />
      </div>
      <div>
        <h1>Oscar Sánchez-Marín Baquero</h1>
        {/* <img src={text} className="header__text" alt={text} /> */}
        <p>
          <FormattedMessage id="app.header" />
        </p>
      </div>
      <div className="header__i18n">
        <I18n />
      </div>
    </div>
  );
};

export default Header;
