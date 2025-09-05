import React, { useState, useEffect, useRef } from "react";
import "../CSS/navbar.css";  // Importa el CSS del Navbar
import logo from "../images/logoYoyo.png";

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
            <a href="/Home"><img src={logo} alt="Fundacion Yoyo Zevallos" className="logo" /></a>
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li><a href="/Home">La Fundación</a></li>
                <li><a href="/Comunidad">Comunidad Consciente</a></li>
                <li><a href="/Memoria">El Archivo De La Memoria</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
