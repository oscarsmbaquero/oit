import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { SWContextProvider } from "./context/context";
import { IntlProvider, FormattedMessage } from "react-intl";

import Navbar from "./core/Components/Navbar/Navbar";
import Navbar2 from "./core/Components/Navbar/Navbar2";
import Navbar3 from "./core/Components/Navbar/Navbar3";
import Header from "./core/Components/Header/Header";
import Footer from "./core/Components/Footer/Footer";
import routes from "./Config/routes";

import Spanish from "../src/lang/es.json";
import English from "../src/lang/en.json";
import Portuguese from "../src/lang/pt.json";
import EusKara from "../src/lang/eu.json";
import I18n from "./context/i18n/I18n";

export const ContextI18n = React.createContext();
//import Navbar2 from "./core/Components/Navbar/Navbar2";

function App() {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(Spanish);

  useEffect(() => {
    if (locale === "pt") {
      setMessages(Portuguese);
    } else if(locale === "en"){
      setMessages(English);
    } else  if(locale === "eu"){
      setMessages(EusKara);
    }else{
      setMessages(Spanish);
    }
  }, [locale]);

  function selectLanguage(newLocale) {
    setLocale(newLocale);
    if (newLocale === "pt") {
      setMessages(Portuguese);
    } else if (newLocale === "en"){
      setMessages(English);
    } else if (newLocale === "eu"){
      setMessages(EusKara);
    } else {
      setMessages(Spanish);
    }
  }

  return (
    <div className="App">
      <ContextI18n.Provider value={{ locale, selectLanguage }}>
        <IntlProvider locale={locale} messages={messages}>
          <Router>
            <Header/>
            <Navbar2/>
            <div className="main">
              <Routes>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
            <Footer />
          </Router>
        </IntlProvider>
      </ContextI18n.Provider>
    </div>
  );
}

export default App;
