import { Route, Routes } from "react-router-dom";
import "./style/App.css";
import Details from "./page/Details";
import Flights from "./page/Flights";
import NotFound from "./page/NotFound";
import Success from "./page/Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Flights />} />
      <Route path="/flights/:uuid" element={<Details />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
