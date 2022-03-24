import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-part">
      <div className="container">
        <div className="">
          <img src={logo} alt="logo" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Order Review
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Manage Inventory
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
