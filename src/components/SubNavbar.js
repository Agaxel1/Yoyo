import "../CSS/navbar.css";  // Importa el CSS del Navbar

/* Segunda Navbar */
const SubNavbar = () => {
    return (
        <nav class="sub-navbar">
            <ul>
                <li><a href="/Conocenos">Conócenos</a></li>
                <li><a href="/Home">Nuestro camino</a></li>
                <li><a href="/Home">Enterate</a></li>
                <li><a href="/Encuentranos">Encuentranos</a></li>
                <li><a href="/Home">Apoyanos</a></li>
            </ul>
        </nav>
    )
}

export default SubNavbar;