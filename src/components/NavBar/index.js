import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation(); // Obtém a rota atual

  return (
    <nav className="navbar">
      <h2>Reading Journal</h2>
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Página Incial
          </Link>
        </li>
        <li>
          <Link to="/books" className={location.pathname === "/books" ? "active" : ""}>
            Lista de Livros
          </Link>
        </li>
        <li>
          <Link to="/add" className={location.pathname === "/add" ? "active" : ""}>
            Cadastrar
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
