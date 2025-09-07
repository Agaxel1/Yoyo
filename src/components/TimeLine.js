import { useState } from "react";
import "../CSS/styles.css";
import Patrono from '../images/Patrono.jpeg';
import logoYoyo from '../images/logoYoyo.png';

const timelineData = [
  {
    year: "1961 - 2012",
    title: "Yoyó Zevallos",
    description:
      "Un hombre cuya solidaridad, alegría y amor por la vida marcaron a todos los que lo conocieron.",
      extra:
      "Este fue el inicio de una vida que inspiraría más adelante a una fundación dedicada al arte y la felicidad. Su legado queda sembrado en quienes compartieron con él. Años más tarde, su espíritu se convertiría en la chispa para una obra colectiva. El recuerdo de su alegría se transformó en motivación para continuar con su filosofía de vida: 'El ser humano vino a este mundo para ser feliz'.",
    image: Patrono,
  },
  {
    year: "2019",
    title: "Fundación legalmente constituida",
    description:
      "El 4 de diciembre nace oficialmente la Fundación Sociocultural y de Ayuda Mutua 'Yoyó Zevallos'.",
    extra:
      "Desde entonces hemos trabajado por brindar beneficios psicoterapéuticos a través del arte.",
    image: logoYoyo,
  },
];

const NuestroCamino = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Nuestro Camino</h2>
      <p className="timeline-subtitle">
        Inspirados en la vida y legado de Yoyó Zevallos, creemos que <br />
        <strong>“El ser humano vino a este mundo para ser feliz”.</strong>
      </p>

      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleActive(index)}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{item.year}</h3>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              {activeIndex === index && (
                <div className="timeline-extra">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="timeline-image"
                  />
                  <p className="timeline-extra-text">{item.extra}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="timeline-footer">
        <h2>
          Nuestro camino recién empieza, y queremos recorrerlo junto a ti.
        </h2>
      </div>
    </section>
  );
};

export default NuestroCamino;
