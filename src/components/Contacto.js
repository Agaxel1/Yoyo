import React from "react";
import "../CSS/styles.css";

const Contacto = () => {
  return (
    <section className="contacto-section">
      {/* Columna izquierda */}
      <div className="contacto-info">
        <h2>Contáctanos</h2>
        <p><strong>Teléfono:</strong> +593 9XX XXX XXX</p>
        <p><strong>Email:</strong> correo@gmail.com</p>
        <p><strong>Dirección:</strong> Av. Ejemplo, Portoviejo, Manabí, Ecuador</p>
      </div>

      {/* Columna derecha con mapa */}
      <div className="contacto-mapa-container">
        <div className="mapa-box">
          <iframe
            title="Mapa ubicación"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.151341611046!2d-80.46185692730697!3d-1.0476666354071364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMDInNTEuNiJTIDgwwrAyNyczMy40Ilc!5e0!3m2!1ses!2sec!4v1757040947053!5m2!1ses!2sec"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mapa-iframe"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacto;