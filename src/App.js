import React, { useState } from "react"; // Importando React e useState
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importando as ferramentas de roteamento
import NavBar from "./components/NavBar"; // Importando o componente NavBar
import BookForm from "./components/BookForm"; // Importando o componente para o formulário de livros
import BookList from "./components/BookList"; // Importando o componente de lista de livros

function App() {
  // Definindo o estado dos livros, que inicialmente é um array com 2 livros
  const [books, setBooks] = useState([
    { title: "Livro 1", author: "Autor 1", genre: "Ficção", date: "2021-01-01" },
    { title: "Livro 2", author: "Autor 2", genre: "Aventura", date: "2022-05-15" },
  ]);

  // Função para adicionar um novo livro à lista
  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]); // Adiciona o livro à lista de livros
  };

  // Função para atualizar um livro existente na lista
  const updateBook = (index, updatedBook) => {
    const updatedBooks = [...books]; // Cria uma cópia da lista de livros
    updatedBooks[index] = updatedBook; // Atualiza o livro no índice especificado
    setBooks(updatedBooks); // Atualiza o estado com a nova lista de livros
  };

  // Função para excluir um livro da lista
  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index); // Remove o livro do índice fornecido
    setBooks(updatedBooks); // Atualiza o estado com a nova lista de livros
  };

  // Função para buscar livros na lista com base no título ou autor
  const searchBooks = (query) => {
    return books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) || // Pesquisa pelo título
      book.author.toLowerCase().includes(query.toLowerCase()) // Pesquisa pelo autor
    );
  };

  return (
    <Router> {/* Usando o Router para navegação */}
      <div className="App">
        <NavBar /> {/* Exibindo a barra de navegação */}
        <Routes>
          {/* Rota principal, exibe a página inicial com uma mensagem de boas-vindas */}
          <Route
            path="/"
            element={
              <div>
                <h1>Página Inicial</h1>
                <h2>Bem-vindo ao Reading Journal!</h2>
              </div>
            }
          />
          {/* Rota para a lista de livros */}
          <Route
            path="/books"
            element={<BookList books={books} deleteBook={deleteBook} />} // Passando os livros e a função de deletar para a lista
          />
          {/* Rota para o formulário de adicionar livro */}
          <Route
            path="/add"
            element={<BookForm addBook={addBook} />} // Passando a função de adicionar livro
          />
          {/* Rota para o formulário de editar um livro */}
          <Route
            path="/update/:index"
            element={<BookForm books={books} updateBook={updateBook} />} // Passando a lista de livros e a função de atualizar
          />
          {/* Rota para a página "Sobre" */}
          <Route
            path="/about"
            element={
              <div>
                <h1>Sobre</h1>
                <h2>
                  Esta é uma aplicação para um CRUD de um Reading Journal. Este
                  projeto é referente à disciplina de Desenvolvimento de Sistema
                  Frontend.
                </h2>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;