import React, {useState} from 'react';
import '../CSS/styles.css';
import Patrono from '../images/Patrono.jpeg';
import slider1 from '../images/slider1.jpg';
import slider2 from '../images/slider2.jpg';

const Conocenos = () => {
    /* Estado para manejar varios subtítulos abiertos*/
    const [activos, setActivos] = useState([]);

    /* Función para alternar*/
    const toggleContenido = (index) => {
        if (activos.includes(index)) {
            setActivos(activos.filter((i) => i !== index));
        } else {
            setActivos(activos === index ? null : index);
            setActivos([...activos, index]);
        }
    };

    return (
        <section className='content-section'>
            <div className='left-side'>
                <h2>Sobre la Fundación Yoyo Zevallos</h2>

                <div className="accordion-item">
                <button 
                    className={`accordion-header ${activos.includes(1) ? "active" : ""}`} 
                    onClick={() => toggleContenido(1)}
                >
                    <span className="triangle">▶</span> Quiénes somos
                </button>
                    <div className={`accordion-content ${activos.includes(1) ? "open" : ""}`}>
                    Una fundación sociocultural y de ayuda mutua que busca realizar acciones y
                     actividades con personas de atención prioritaria, a través de expresiones
                     artísticas, con un alto componente final psicoterapéutico. Nuestro lema: 
                     “El ser humano vino a este mundo para ser feliz”.
                    </div>
                </div>

                <div className="accordion-item">
                <button 
                    className={`accordion-header ${activos.includes(2) ? "active" : ""}`} 
                    onClick={() => toggleContenido(2)}
                >
                    <span className="triangle">▶</span> Nuestro equipo
                </button>
                    <div className={`accordion-content ${activos.includes(2) ? "open" : ""}`}>
                    Nuestro equipo.
                    </div>
                </div>

                <div className="accordion-item">
                <button 
                    className={`accordion-header ${activos.includes(3) ? "active" : ""}`} 
                    onClick={() => toggleContenido(3)}
                >
                    <span className="triangle">▶</span> Nuestro propósito
                </button>
                    <div className={`accordion-content ${activos.includes(3) ? "open" : ""}`}>
                    La Fundación Sociocultural “Yoyó Zevallos” tiene como propósito 
                    fundamental brindar beneficios psicoterapéuticos a través del arte.
                    </div>
                </div>

                <div className="accordion-item">
                <button 
                    className={`accordion-header ${activos.includes(4) ? "active" : ""}`} 
                    onClick={() => toggleContenido(4)}
                >
                    <span className="triangle">▶</span> Nuestra inspiración
                </button>
                    <div className={`accordion-content ${activos.includes(4) ? "open" : ""}`}>
                    la fundación se inspira tanto en el arte como herramienta de sanación y 
                    transformación social, como en la memoria y filosofía de vida de Yoyó Zevallos.
                    </div>
                </div>

                <div className="accordion-item">
                <button 
                    className={`accordion-header ${activos.includes(5) ? "active" : ""}`} 
                    onClick={() => toggleContenido(5)}
                >
                    <span className="triangle">▶</span> Nuestro Patrono
                </button>
                    <div className={`accordion-content ${activos.includes(5) ? "open" : ""}`}>
                        <div className="accordion-dividido">
                            <div className="accordion-img">
                                <img src={Patrono} alt="Patrono" />
                            </div>
                            <div className="accordion-texto">
                                <p>
                                    Rodolfo Xavier Zevallos Mendoza. Conocido por todos como “Yoyo”, y quien 
                                    da nombre a nuestra organización, nació el 22 de junio de 1961 en Portoviejo, 
                                    Manabí, Ecuador. Se graduó como naturópata, profesión que ejerció hasta su 
                                    fallecimiento el 3 de diciembre de 2012 en su ciudad natal. Su espíritu 
                                    solidario, consecuente y empático lo llevó a vivir bajo la frase de su autoría, 
                                    que hoy constituye nuestro lema: “El ser humano vino a este mundo para ser feliz”. 
                                    Se esforzó para que todas las personas a quienes tocó en vida alcanzaran ese 
                                    estado de plenitud.
                                </p>
                            </div>
                        </div>                  
                    </div>
                </div>
            </div>

            <div className='right-side'>
                <p>
                    El ser humano vino a este mundo para ser feliz.
                </p>
                <div className='image-block'>
                    <img src={slider1} alt="slider1" />
                    <div className="texto-bajo-img">Proyecto en desarrollo</div>
                </div>
                <div className='image-block'>
                    <img src={slider2} alt="slider2" />
                    <div className="texto-bajo-img">Artículo en desarrollo</div>
                </div>
            </div>
        </section>
    );
};

export default Conocenos;