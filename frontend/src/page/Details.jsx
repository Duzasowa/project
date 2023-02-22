import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import "../style/Details.css";

const Details = () => {
  const [value, setValue] = useState("");
  const [flight, setFlight] = useState([]);
  const { uuid } = useParams();
  const navigate = useNavigate();

  // Downloading a flight by uuid
  useEffect(() => {
    const loadFlightData = async () => {
      return await axios
        .get(`http://localhost:3001/flights/${uuid}`)
        .then((response) => setFlight(response.data))
        .catch((err) => err);
    };
    loadFlightData();
  }, [uuid]);

  // Simulation of buying a ticket
  const sendRequest = async () => {
    return await axios
      .post(`http://localhost:3001/order/${uuid}`)
      .then((response) => setValue(response.data))
      .catch((err) => err);
  };

  return (
    <>
      <Navbar />
      <div className="details__body">
        <div className="details__container">
          <div className="details__up-container">
            <div className="">ID: {flight.uuid}</div>
            <div className="">Air Line Code: {flight.airlineCode} </div>
            <button
              onClick={() => {
                sendRequest();
                setTimeout(() => {
                  navigate("/success");
                }, "3000");
              }}
            >
              Buy a ticket
            </button>
          </div>
          <div className="details__down-container">
            <div>{value}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
