import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { About } from "./pages/about";
import { Work } from "./pages/work";
import { Contact } from "./pages/contact";
import { MobileNavbar } from "./components/mobile-navbar";
import ScrollToTop from "./components/scroll-top";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <Navbar />
            <MobileNavbar />
            <Route path="/" exact render={About} />
            <Route path="/work/" render={Work} />
            <Route path="/contact/" render={Contact} />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
