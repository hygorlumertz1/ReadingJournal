import React, { useState } from "react"; // Importando React e useState
import { Link } from "react-router-dom"; // Importando Link para navegação entre páginas

const BookList = ({ books, deleteBook }) => {
  // Estado para armazenar o valor da busca
  const [searchQuery, setSearchQuery] = useState("");

  // Função chamada sempre que o usuário digita na barra de busca
  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Atualiza o estado da busca com o valor digitado
  };

  // Filtra os livros de acordo com a busca, verificando se o título ou autor contém o valor buscado
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) || // Pesquisa pelo título
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) // Pesquisa pelo autor
  );

  return (
    <div>
      <h1>Lista de Livros</h1>

      {/* Barra de pesquisa */}
      <div>
        <input
          type="text"
          placeholder="Buscar por título ou autor..."
          value={searchQuery}
          onChange={handleSearch} // Chama a função handleSearch sempre que o usuário digita
        />
      </div>

      {/* Se não houver livros filtrados, mostra uma mensagem */}
      {filteredBooks.length === 0 ? (
        <p>Não há livros cadastrados ou não foram encontrados livros com essa busca.</p>
      ) : (
        <ul>
          {/* Mapeando e exibindo os livros filtrados */}
          {filteredBooks.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong> - {book.author} - {book.genre} - {book.date}
              <div>
                {/* Link para a página de edição do livro */}
                <Link to={`/update/${index}`}>
                  <button>Editar</button>
                </Link>
                {/* Botão para excluir o livro */}
                <button onClick={() => deleteBook(index)}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Link para a página de adicionar um novo livro */}
      <Link to="/add">
        <button>Cadastrar Novo Livro</button>
      </Link>
    </div>
  );
};

export default BookList;