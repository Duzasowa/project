import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../style/Success.css";

const Success = () => {
  return (
    <>
      <Navbar />
      <div className="card__body">
        <div className="card">
          <div className="card-2">
            <i className="checkmark">✓</i>
          </div>
          <h1>Success</h1>
          <p>
            We received your purchase request;
            <br /> we'll be in touch shortly!
          </p>
          <Link to={`/`}>Back to main page!</Link>
        </div>
      </div>
    </>
  );
};

export default Success;
