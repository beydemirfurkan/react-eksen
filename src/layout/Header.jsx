import React from "react";

import eksenLogo from "../img/global/eksen_logo.png";

const Header = () => {
  return (
    <header className="bg-white fixed-top shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid justify-content-center mx-5">
          <a className="navbar-brand" href="#">
            <img src={eksenLogo} alt="" />
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Anasayfa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hakkımızda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Servisler
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Haberler
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
