import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <span className="app-title">
          <h1>NY Senate Confirmation Vote Data</h1>
        </span>
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`main-nav ${isMenuOpen ? "open" : ""}`}>
          <Link to="/senators" className="nav-link" onClick={closeMenu}>
            Senators
          </Link>
          <Link to="/nominees" className="nav-link" onClick={closeMenu}>
            Nominees
          </Link>
          <Link to="/slates" className="nav-link" onClick={closeMenu}>
            Slates
          </Link>
          <Link to="/positions" className="nav-link" onClick={closeMenu}>
            Positions
          </Link>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
      <footer className="app-footer">
        <a
          href="https://github.com/reinventalbany/ny-senate-confirmations"
          target="_blank"
        >
          This site is open source.
        </a>
      </footer>
    </div>
  );
}

export default App;
