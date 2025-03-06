import React from "react";
import { Link } from "react-router-dom";

const BookList = ({ books }) => {
  return (
    <div>
      <h1>Lista de Livros</h1>
      {books.length === 0 ? (
        <p>Não há livros cadastrados.</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong> - {book.author}
            </li>
          ))}
        </ul>
      )}
      <Link to="/add">
        <button>Cadastrar Novo Livro</button>
      </Link>
    </div>
  );
};

export default BookList;
