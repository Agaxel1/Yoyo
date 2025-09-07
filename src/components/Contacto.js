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
        <p><strong>Dirección:</strong> Casa patrimonial Wilfrido Loor, Calles Quiroga y Mejía, Portoviejo, Manabí.</p>
      </div>

      {/* Columna derecha con mapa */}
      <div className="contacto-mapa-container">
        <div className="mapa-box">
          <iframe
            title="Mapa ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.138072541164!2d-80.44888279999999!3d-1.0580369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902b8d4eace8f0f3%3A0xdbb7c323ef52f6e0!2sCECAL%20WILFRIDO%20LOOR!5e0!3m2!1ses-419!2sec!4v1757129255485!5m2!1ses-419!2sec"
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