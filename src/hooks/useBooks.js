import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMounted = useRef(false);

  // Carregar livros da API
  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/books");
      if (isMounted.current) {
        setBooks(response.data);
      }
    } catch (err) {
      if (isMounted.current) {
        setError("Erro ao carregar livros.");
        console.error(err);
      }
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    isMounted.current = true;
    fetchBooks();
    
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Adicionar livro via API
  const addBook = async (book) => {
    try {
      await axios.post("http://localhost:5000/books", book);
    } catch (err) {
      setError("Erro ao adicionar livro.");
      console.error(err);
    }
  };

  // Atualizar livro via API
  const updateBook = async (id, updatedBook) => {
    try {
      await axios.put("http://localhost:5000/books", updatedBook);
      // Atualiza o estado local após a atualização bem-sucedida
      setBooks(prevBooks => prevBooks.map(book => 
        book.id === updatedBook.id ? updatedBook : book
      ));
    } catch (err) {
      setError("Erro ao atualizar livro.");
      console.error(err);
    }
  };

  // Excluir livro via API
  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/books/${id}`);
      fetchBooks();  // Refaz a busca dos livros após excluir
    } catch (err) {
      setError("Erro ao excluir livro.");
      console.error(err);
    }
  };

  return {
    books,
    loading,
    error,
    addBook,
    updateBook,
    deleteBook,
  };
};

export default useBooks;