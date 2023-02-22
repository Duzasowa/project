import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import "../style/Flights.css";

const Flights = () => {
  const [flights, setFlights] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  useEffect(() => {
    loadFlightsData();
  }, []);

  // Downloading all flights
  const loadFlightsData = async () => {
    return await axios
      .get(`http://localhost:3001/flights`)
      .then((response) => setFlights(response.data))
      .catch((err) => console.log(err));
  };

  // Reset search parameters
  const handleReset = () => {
    loadFlightsData();
  };

  // Search logic
  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3001/flights?q=${value}&sortBy=${sortValue}`)
      .then((response) => {
        setFlights(response.data);
        setValue("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="flight">
        <div className="flightBanner__container">
          <div className="tableBox__container">
            <div className="box__container">
              {/* Reading the form */}
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search me..."
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit">Search</button>
                <button onClick={() => handleReset()}>Reset</button>
                <select
                  onChange={(e) => {
                    setSortValue(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="asc">Small</option>
                  <option value="desc">VAST</option>
                </select>
              </form>
              {/* { Map flights} */}
              {flights.slice(0, 6).map((flight) => (
                <div className="box__container-2" key={flight.uuid}>
                  {/* BOX DEPARTURE */}
                  <div className="box__ticket">
                    <div className="ticket__id">
                      Air Line Code: {flight.airlineCode}
                    </div>
                    <div className="boxTicket__container">
                      {flight.bounds.map((data) => {
                        return (
                          <div className="departure__box" key={data.pin}>
                            <div className="departureName__city">
                              {data.departure.name}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* BOX ARROWS */}
                  <div className="box-2">
                    {flight.bounds.length > 1 ? (
                      <div className="ArrowRightLeft__container">
                        <div>
                          {"-----------------------"}
                          <i className="arrow right"></i>
                        </div>
                        <div>
                          <i className="arrow left"></i>
                          {"-----------------------"}
                        </div>
                      </div>
                    ) : (
                      <div className="ArrowRight__container">
                        <div>
                          {"-----------------------"}
                          <i className="arrow right"></i>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* BOX DESTINATION */}
                  <div className="box__ticket">
                    <div className="boxTicket__container">
                      {flight.bounds.map((data) => {
                        return (
                          <div className="departure__box" key={data.pin}>
                            <div className="departureName__city">
                              {data.destination.name}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* BOX PRISE && BUY TICKET */}
                  <div className="box-4">
                    <div className="left__border">
                      <div className="line" />
                    </div>
                    <div className="priceTicketButton__container">
                      <div className="price">
                        <div>{flight.price.amount}</div>
                        <div>{flight.price.currency}</div>
                      </div>
                      <div className="button__container">
                        <Link to={`/flights/${flight.uuid}`}>
                          <div className="button">
                            <div>Buy!</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flights;
