import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";
import Home from "./Pages/Home";
import Reservation from "./Pages/Reservation";
import Confirmation from "./Pages/Confirmation";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/services" element={<Services />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
