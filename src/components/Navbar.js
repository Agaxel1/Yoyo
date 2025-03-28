import React, { useState, useEffect, useRef } from "react";
import "../CSS/navbar.css";  // Importa el CSS del Navbar
import logo from "../images/logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollingDown, setScrollingDown] = useState(false);
    
    // Usamos useRef para persistir el valor de lastScrollTop entre renders
    const lastScrollTop = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > lastScrollTop.current) {
                // Scroll hacia abajo
                setScrollingDown(true);
            } else {
                // Scroll hacia arriba
                setScrollingDown(false);
            }
            lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll; // Actualiza el valor de lastScrollTop
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);  // El array vacío asegura que solo se agregue el listener una vez

    return (
        <nav className={`navbar ${scrollingDown ? "hidden" : ""}`}>
            <img src={logo} alt="Colectivo Comunidad Consiente" className="logo" />

            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li className='top'><a href="/">Inicio</a></li>
                <li><a href="/projects">Proyectos de Ayuda</a></li>
                <li><a href="/events">Eventos</a></li>
                <li><a href="/about">Sobre Nosotros</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
