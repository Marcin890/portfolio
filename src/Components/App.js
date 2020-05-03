import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Page from "./Page";
import { BrowserRouter as Router } from "react-router-dom";
import "../Styles/App.scss";
import "../Styles/Animations.css";
import ScrollToTop from "react-router-scroll-top";

function App() {
  return (
    <Router
      // basename={process.env.PUBLIC_URL}
      onUpdate={() => window.scrollTo(0, 0)}
    >
      <ScrollToTop>
        <div className="app">
          <div className="wrapper">
            <header className="header">{<Navigation />}</header>
            <main>
              <Page />
            </main>
          </div>
          <footer className="footer">{<Footer />}</footer>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
