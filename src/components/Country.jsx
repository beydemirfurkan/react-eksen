import React from "react";

// Component

// Images
import Romania from "../img/home/romania.png";
import RomaniaMap from "../img/home/romania_png.png";
import Turkey from "../img/home/turkey.png";
import TurkeyMap from "../img/home/turkey_png.png";

const Country = () => {
  return (
    <section className="country">
      <div className="container-fluid gx-0 overflow-hidden pt-5">
        <div className="d-flex py-5">
          {/* Country Item */}
          <div className="col-md-6 country-item">
            <div className="overlay"></div>
            <div className="position-relative">
              <img src={Romania} alt="" className="w-100 country-item-img" />
              <div className="position-absolute top-50 start-50 translate-middle text-white text-center country-item-absolute">
                <img src={RomaniaMap} alt="" className="country-item-img2" />
                <h3 className="text-uppercase fw-bold py-4 display-5">
                  Romania
                </h3>
                <p className="text-white">
                  Latilokum Sokak Fidan Apt.No.7 D.1 Şişli <br />
                  Romanya - Bükreş
                </p>
                <a href="tel:902122112223" className="text-white">
                  +90 212 211 22 23
                </a>
              </div>
            </div>
          </div>
          {/* Country Item2 */}
          <div className="col-md-6 country-item active">
            <div className="overlay"></div>
            <div className="position-relative">
              <img src={Turkey} alt="" className="w-100 country-item-img" />
              <div className="position-absolute top-50 start-50 translate-middle text-white text-center country-item-absolute">
                <img src={TurkeyMap} alt="" className="country-item-img2" />
                <h3 className="text-uppercase fw-bold py-4 display-5">
                  Romania
                </h3>
                <p className="text-white">
                  Latilokum Sokak Fidan Apt.No.7 D.1 Şişli <br />
                  Romanya - Bükreş
                </p>
                <a href="tel:902122112223" className="text-white">
                  +90 212 211 22 23
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Country;
