import "../CSS/navbar.css";  // Importa el CSS del Navbar

/* Segunda Navbar */
const SubNavbar = () => {
    return (
        <nav class="sub-navbar">
            <ul>
                <li><a href="/Conocenos">Conócenos</a></li>
                <li><a href="/NuestroCamino">Nuestro camino</a></li>
                <li><a href="/Enterate">Enterate</a></li>
                <li><a href="/Encuentranos">Encuentranos</a></li>
                <li><a href="/Apoyanos">Apoyanos</a></li>
            </ul>
        </nav>
    )
}

export default SubNavbar;