import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Excel from "./Components/Excel";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Excel" element={<Excel />} />
    </Routes>
    </>
  );
}

export default App;