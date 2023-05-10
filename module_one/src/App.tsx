import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="App">
      <MyNavbar />
    </div>
  );
}

export default App;
