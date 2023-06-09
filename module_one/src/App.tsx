import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import UnitOne from "./pages/Unit1";
import UnitTwo from "./pages/Unit2";
import UnitThree from "./pages/Unit3";

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
