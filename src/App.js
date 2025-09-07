import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Conocenos from "./pages/Conocenos";
import Camino from "./pages/Camino";
import Enterate from "./pages/Enterate";
import Encuentranos from "./pages/Encuentranos";
import Apoyanos from "./pages/Apoyanos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Conocenos" element={<Conocenos/>}/>
        <Route path="/NuestroCamino" element={<Camino />} />
        <Route path="/Enterate" element={<Enterate />} />
        <Route path="/Encuentranos" element={<Encuentranos/>}/>
        <Route path="/Apoyanos" element={<Apoyanos/>}/>

      </Routes>
    </Router>
  );
}

export default App;
