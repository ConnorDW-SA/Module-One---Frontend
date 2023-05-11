import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import UnitOne from "./pages/unit1/UnitOne";
import UnitTwo from "./pages/unit2/UnitTwo";
import UnitThree from "./pages/unit3/UnitThree";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/unit_one" element={<UnitOne />} />
          <Route path="/unit_two" element={<UnitTwo />} />
          <Route path="/unit_three" element={<UnitThree />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
