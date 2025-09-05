import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Comunidad from "./pages/Comunidad";
import Memoria from "./pages/Memoria";
import Conocenos from "./pages/Conocenos";
import Encuentranos from "./pages/Encuentranos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Comunidad" element={<Comunidad />} />
        <Route path="/Memoria" element={<Memoria />} />
        <Route path="/Conocenos" element={<Conocenos/>}/>
        <Route path="/Encuentranos" element={<Encuentranos/>}/>
      </Routes>
    </Router>
  );
}

export default App;
