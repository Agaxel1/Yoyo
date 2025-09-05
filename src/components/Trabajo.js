import React from "react";
import "../CSS/styles.css";
import trabajo1 from '../images/trabajo1.png';
import trabajo2 from '../images/trabajo2.png';
import trabajo3 from '../images/trabajo3.png';

const Trabajo = () => {
  return (
    <section className="trabajo">
    <h2>Trabajo en Territorio</h2>
      <div className="trabajo-container">
        <div className="trabajo-item">
          <img src={trabajo1} alt="trabajo1" />
          <p>Acciones</p>
        </div>
        <div className="trabajo-item">
          <img src={trabajo2} alt="trabajo2" />
          <p>Democratización de la Cultura</p>
        </div>
        <div className="trabajo-item">
          <img src={trabajo3} alt="trabajo3" />
          <p>Intervenciones</p>
        </div>
      </div>
    </section>
  );
}

export default Trabajo;
