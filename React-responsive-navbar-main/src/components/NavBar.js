import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	return (
		<>
			<nav className="navbar">
				<div className="nav-container">
					<NavLink exact to="/" className="nav-logo">
						<i className="fas fa-code"></i>
					</NavLink>

					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							{/* <NavLink>: Esto indica que se está utilizando el componente de navegación NavLink en React.

exact: Es una propiedad opcional que se utiliza para especificar que la coincidencia de la ruta debe ser exacta. En este caso, significa que la ruta solo coincidirá si es exactamente igual a "/" (la ruta raíz).

to="/": La propiedad to indica la ruta a la que se redireccionará cuando se haga clic en el enlace. En este caso, la ruta es "/" (la ruta raíz).

activeClassName="active": La propiedad activeClassName es opcional y se utiliza para especificar la clase CSS que se aplicará al enlace activo. En este caso, cuando la ruta coincide con la ruta actual, se aplicará la clase CSS "active".

className="nav-links": La propiedad className se utiliza para especificar la clase CSS que se aplicará al enlace. En este caso, se aplica la clase CSS "nav-links".

onClick={handleClick}: La propiedad onClick se utiliza para especificar una función de controlador de eventos que se ejecutará cuando se haga clic en el enlace. En este caso, la función handleClick se invocará cuando se haga clic en el enlace.

Home: Este es el contenido del enlace, que se mostrará como el texto visible del enlace. En este caso, el texto visible es "Home". */}
							<NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact to="/about" activeClassName="active" className="nav-links" onClick={handleClick}>
								Categorias
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact to="/blog" activeClassName="active" className="nav-links" onClick={handleClick}>
								Productos
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact to="/contact" activeClassName="active" className="nav-links" onClick={handleClick}>
								Contact Us
							</NavLink>
						</li>
					</ul>
					<div className="nav-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
					</div>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
