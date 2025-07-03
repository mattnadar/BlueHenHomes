import React from 'react';
import './NavBar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/list">List a Property</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
