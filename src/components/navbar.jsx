import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <header className="flex-row justify-between items-baseline dn-nl">
    <div className="heading-2">LIAM VOVK</div>
    <nav className="main-nav flex-row">
      <div className="nav">
        <Link to="/">ABOUT</Link>
      </div>

      <div className="nav">
        <Link to="/work/">WORK</Link>
      </div>

      <div className="nav">
        <Link to="/contact/">CONTACT</Link>
      </div>
    </nav>
  </header>
);
