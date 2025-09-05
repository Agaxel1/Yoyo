import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../CSS/styles.css";


console.log(process.env.REACT_APP_FACEBOOK_URL)
const Footer = () => {
  // Accede a los enlaces desde las variables de entorno
  const facebookUrl = process.env.REACT_APP_FACEBOOK_URL="https://www.facebook.com/fundacionyoyozevallos/?locale=es_LA";
  const twitterUrl = process.env.REACT_APP_TWITTER_URL;
  const instagramUrl = process.env.REACT_APP_INSTAGRAM_URL;

  return (
    <footer className="footer">
      <p>© 2025 Fundación Yoyo Zevallos. Todos los derechos reservados.</p>
      <div className="social-links">
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
