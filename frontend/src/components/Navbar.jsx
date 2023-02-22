import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__body">
      <div className="leftSide__container">
        <div className="navbarPlaceLogo__containet">
          <Link to={`/`}>
            <div className="logo__button">OstAirLine</div>
          </Link>
        </div>
      </div>
      <div className="rightSide__container">
        <div className="navbarButton__container">
          <Link to={`/`}>
            <div className="navbar__button">Flights</div>
          </Link>
          <Link to={`/hotels`}>
            <div className="navbar__button">Hotels</div>
          </Link>
          <Link to={`/carRental`}>
            <div className="navbar__button">Car rental</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
