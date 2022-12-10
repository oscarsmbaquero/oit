import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { SWContextProvider } from "./context/context";
import { IntlProvider, FormattedMessage } from "react-intl";

import Navbar from "./core/Components/Navbar/Navbar";
import Header from "./core/Components/Header/Header";
import Footer from "./core/Components/Footer/Footer";
import routes from "./Config/routes";

import Spanish from "../src/lang/es.json";
import English from "../src/lang/en.json";
import I18n from "./context/i18n/I18n";

export const ContextI18n = React.createContext();
//import Navbar2 from "./core/Components/Navbar/Navbar2";

function App() {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(Spanish);

  useEffect(() => {
    if (locale === "es-ES") {
      setMessages(Spanish);
    } else {
      setMessages(English);
    }
  }, [locale]);

  function selectLanguage(newLocale) {
    setLocale(newLocale);
    if (newLocale === "es-ES") {
      setMessages(Spanish);
    } else {
      setMessages(English);
    }
  }

  return (
    <div className="App">
      <ContextI18n.Provider value={{ locale, selectLanguage }}>
        <IntlProvider locale={locale} messages={messages}>
          <Router>
            <Header />
            <Navbar />
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
