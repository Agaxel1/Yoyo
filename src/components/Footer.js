import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../CSS/styles.css";

const Footer = () => {
  // Accede a los enlaces desde las variables de entorno
  const facebookUrl = process.env.REACT_APP_FACEBOOK_URL;
  const twitterUrl = process.env.REACT_APP_TWITTER_URL;
  const instagramUrl = process.env.REACT_APP_INSTAGRAM_URL;
  const linkedinUrl = process.env.REACT_APP_LINKEDIN_URL;

  return (
    <footer className="footer">
      <p>© 2025 Colectivo Comunidad Consiente. Todos los derechos reservados.</p>
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
