import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useBooks from "../../hooks/useBooks";
import { TextField, Button, Grid, Typography } from "@mui/material";
import './BookForm.css';

const BookForm = () => {
  const [book, setBook] = useState({ title: "", author: "", genre: "", readAt: "" });
  const { id } = useParams();
  const { books, addBook, updateBook } = useBooks(); // Pegando funções do hook
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const bookToEdit = books.find((book) => book.id === parseInt(id));
      if (bookToEdit) {
        setBook(bookToEdit);
      }
    }
  }, [id, books]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateBook(id, book);  // Atualiza livro se houver id
    } else {
      addBook(book);  // Adiciona novo livro
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <Typography variant="h4" gutterBottom>
        {id ? "Atualizar Livro" : "Adicionar Livro"}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Título"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Autor"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Gênero"
            name="genre"
            value={book.genre}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Data de Leitura"
            name="readAt"
            type="date"
            value={book.readAt}
            onChange={handleChange}
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            {id ? "Atualizar Livro" : "Adicionar Livro"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default BookForm;