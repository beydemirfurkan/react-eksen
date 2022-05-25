import React from "react";
import { Link } from 'react-router-dom'

import eksenLogo from "../img/global/eksen_logo.png";

const Header = () => {
  return (
    <header className="bg-white fixed-top shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid justify-content-center mx-5">
          <Link className="navbar-brand" href="#" to='/'>
            <img src={eksenLogo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to='/'>
                  Anasayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'>
                  Hakkımızda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/services'>
                  Servisler
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/news'>
                  Haberler
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/contact'>
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
