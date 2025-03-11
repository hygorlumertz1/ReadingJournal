import React, { useState, useEffect } from "react"; // Importando React, useState e useEffect
import { useParams, useNavigate } from "react-router-dom"; // Importando hooks de navegação

const BookForm = ({ addBook, updateBook, books }) => {
  // Estado para armazenar os campos do formulário
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");

  // Obtendo o índice do livro da URL, se for uma edição
  const { index } = useParams();
  const navigate = useNavigate(); // Hook para navegação programática

  // Efeito para carregar os dados do livro quando estamos editando
  useEffect(() => {
    if (index !== undefined) {
      const book = books[index]; // Obtém o livro com base no índice da URL
      setTitle(book.title); // Preenche os campos do formulário com os dados do livro
      setAuthor(book.author);
      setGenre(book.genre);
      setDate(book.date);
    }
  }, [index, books]); // Efeito roda quando o índice ou os livros mudam

  // Função chamada quando o formulário é submetido
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário

    const book = { title, author, genre, date }; // Cria um objeto com os dados do livro

    if (index !== undefined) {
      updateBook(index, book); // Se estamos editando, chama a função de atualização
    } else {
      addBook(book); // Se estamos adicionando, chama a função de adição
    }

    navigate("/books"); // Após adicionar ou atualizar, redireciona para a lista de livros
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos do formulário para adicionar ou editar livros */}
      <input
        type="text"
        placeholder="Nome do livro"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Atualiza o título conforme o usuário digita
      />
      <input
        type="text"
        placeholder="Autor(a)"
        value={author}
        onChange={(e) => setAuthor(e.target.value)} // Atualiza o autor conforme o usuário digita
      />
      <input
        type="text"
        placeholder="Gênero"
        value={genre}
        onChange={(e) => setGenre(e.target.value)} // Atualiza o gênero conforme o usuário digita
      />
      <input
        type="text"
        placeholder="Data"
        value={date}
        onChange={(e) => setDate(e.target.value)} // Atualiza a data conforme o usuário digita
      />
      <button type="submit">
        {index !== undefined ? "Atualizar Livro" : "Adicionar Livro"} {/* Texto do botão depende de estar editando ou criando */}
      </button>
    </form>
  );
};

export default BookForm;