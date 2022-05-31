import React from "react";
import Homepage from "./pages/Homepage";
import Nav from "./components/nav";
import Footer from "./components/footer";
import About from "./pages/About";
import Forus from "./pages/Forus";
import BacktotopButton from "./components/BacktotopButton";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Forus" element={<Forus />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <BacktotopButton />
      <Footer />
    </div>
  );
}

export default App;
