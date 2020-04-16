import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Page from "./Page";
import { BrowserRouter as Router } from "react-router-dom";
import "../Styles/App.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="wrapper">
          <header className="header">{<Navigation />}</header>
          <main>
            <Page />
          </main>
        </div>
        <footer className="footer">{<Footer />}</footer>
      </div>
    </Router>
  );
}

export default App;
