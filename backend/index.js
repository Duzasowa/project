import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import flights from "./flights.json" assert { type: "json" };
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

// Simple get Flights
app.get("/", (req, res) => {
  res.json(flights);
});

// Sort by AIRLINECODE and PRICE (or together)
app.get("/flights", (req, res) => {
  const { q } = req.query;
  const { sortBy } = req.query;

  const keys = ["airlineCode"];
  const search = (data) => {
    if (!q) {
      return data;
    }
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };
  const barsik = search(flights).sort(function (a, b) {
    return a.price.amount - b.price.amount;
  });
  res.json(sortBy === "desc" ? barsik.reverse() : barsik);
});

// <---- Sort by dateTime ---->
// const sortByData = search(flights).sort(function (a) {
//   a.bounds.sort(function (a, b) {
//     console.log(a.departure.dateTime, b.destination.dateTime);
//     return a.departure.dateTime - b.destination.dateTime;
//   });
// });

// GET SINGLE FLIGHT
app.get("/flights/:id", (req, res) => {
  const flight = flights.find((flight) => flight.uuid === req.params.id);
  if (flight) {
    res.json(flight);
  } else {
    res.status(404).send();
  }
});

// Simulation of buying a ticket
app.post("/order/:id", (req, res) => {
  const flight = flights.find((flight) => flight.uuid === req.params.id);
  if (flight) {
    res.json(
      `Congratulations! You have successfully purchased a ticket with ID: ${flight.uuid}`
    );
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => console.log(`Server started on poer ${PORT}`));
