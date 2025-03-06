import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {

  const books = [
    { title: "Livro 1", author: "Autor 1" },
    { title: "Livro 2", author: "Autor 2" },
    { title: "Livro 3", author: "Autor 3" },
    { title: "Livro 4", author: "Autor 4" },
  ];

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <div>
              <h1>Página Inicial</h1>
              <h2>Bem-vindo ao Reading Journal!</h2>
            </div>
            } />
          <Route path="/books" element={<BookList books={books} />} />
          <Route path="/add" element={<BookForm />} />
          <Route path="/about" element={
            <div>
              <h1>Sobre</h1>
              <br />
              <h2>Esta é uma aplicação para um CRUD de um Reading Journal. Este projeto é referente à disciplina de Desenvolvimento de Sistema Frontend.</h2>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
