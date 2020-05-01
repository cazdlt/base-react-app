import React from "react";
import { Link, withRouter, useLocation } from "react-router-dom";

function Navbar() {

  let loc=useLocation()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Aplicación de prueba
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className={loc.pathname === "/" ? "nav-item active" : "nav-item" }>
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className={loc.pathname === "/about" ? "nav-item active" : "nav-item" }>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        <span className="navbar-text">ZDLT</span>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
