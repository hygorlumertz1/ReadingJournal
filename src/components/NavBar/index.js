import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation(); // Obtém a rota atual

  return (
    <nav>
      <h2>Reading Journal</h2>
      <ul>
        <li>
          <Link to="/">
            Página Incial
          </Link>
        </li>
        <li>
          <Link to="/books">
            Lista de Livros
          </Link>
        </li>
        <li>
          <Link to="/add" >
            Cadastrar
          </Link>
        </li>
        <li>
          <Link to="/about" >
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
