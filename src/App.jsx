import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./core/Components/Navbar/Navbar";
import Header from "./core/Components/Header/Header";
import Footer from "./core/Components/Footer/Footer";
import routes from "./Config/routes";
import Navbar2 from "./core/Components/Navbar/Navbar2";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
