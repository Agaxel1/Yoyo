import { useState } from "react";
import "../CSS/styles.css";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";

const proyectosData = [
  { id: 1, img: slider1, titulo: "Proyecto en desarrollo" },
  { id: 2, img: slider2, titulo: "Proyecto relevante" },
  { id: 3, img: slider1, titulo: "Proyecto comunitario" },
  { id: 4, img: slider2, titulo: "Proyecto artístico" },
  { id: 5, img: slider1, titulo: "Proyecto educativo" },
  { id: 6, img: slider2, titulo: "Proyecto solidario" },
];

const Proyectos = () => {
  const [verMas, setVerMas] = useState(false);

  // Separar los primeros 2 y el resto
  const primerosDos = proyectosData.slice(0, 2);
  const resto = verMas ? proyectosData.slice(2) : proyectosData.slice(2, 5);

  return (
    <section className="proyectos-section">
      <h2 className="titulo-proyectos">Nuestros Proyectos</h2>

      {/* Primer fila con 2 proyectos */}
      <div className="fila-dos">
        {primerosDos.map((proyecto) => (
          <div key={proyecto.id} className="image-block">
            <img src={proyecto.img} alt={proyecto.titulo} />
            <div className="texto-bajo-img">{proyecto.titulo}</div>
          </div>
        ))}
      </div>

      {/* Resto en filas de 3 */}
      <div className="fila-tres">
        {resto.map((proyecto) => (
          <div key={proyecto.id} className="image-block">
            <img src={proyecto.img} alt={proyecto.titulo} />
            <div className="texto-bajo-img">{proyecto.titulo}</div>
          </div>
        ))}
      </div>

      {/* Botón */}
      {proyectosData.length > 5 && (
        <button className="btn-ver-mas" onClick={() => setVerMas(!verMas)}>
          {verMas ? "Ver menos" : "Ver más"}
        </button>
      )}
    </section>
  );
};

export default Proyectos;
