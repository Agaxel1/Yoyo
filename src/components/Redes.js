import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import '../CSS/styles.css';

console.log(process.env.REACT_APP_FACEBOOK_URL)
const Redes = () => {
    // Accede a los enlaces desde las variables de entorno
    const facebookUrl = process.env.REACT_APP_FACEBOOK_URL="https://www.facebook.com/fundacionyoyozevallos/?locale=es_LA";
    const twitterUrl = process.env.REACT_APP_TWITTER_URL;
    const instagramUrl = process.env.REACT_APP_INSTAGRAM_URL;

    return (
    <section className="trabajo">
    <h2>Nuestras Redes</h2>
      <div className="redes-container">
        <div className="social-links">
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
            <FaFacebook size={150} />
            </a>
        </div>
        <div className="social-links">
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
            <FaTwitter size={150} />
            </a>
        </div>
        <div className="social-links">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={150} />
            </a>
        </div>
      </div>
    </section>
    );
};

export default Redes;
