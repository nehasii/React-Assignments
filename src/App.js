import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Routing/Navbar";
import Home from "./Routing/Home";
import Login from "./Routing/Login";
import Products from "./Routing/Products";
import NotFound from "./Routing/NotFound";
import TODO from "./Routing/TODO";
import AboutUs from "./Routing/AboutUs";


function App() { 

  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/TODO" element={<TODO/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App;
