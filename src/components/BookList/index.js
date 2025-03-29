import React, { useState } from "react";
import { Link } from "react-router-dom";
import useBooks from "../../hooks/useBooks"; // Importando o hook personalizado
import { Button, Grid, List, ListItem, ListItemText, Typography, Divider, Pagination, FormControl, InputLabel, Select, MenuItem } from "@mui/material"; // Importando componentes do MUI
import './BookList.css'; // Importando o CSS para a listagem de livros

const BookList = () => {
  const { books, loading, error, deleteBook } = useBooks(); // Desestruturando os dados do hook
  const [page, setPage] = useState(1); // Página atual
  const [itemsPerPage, setItemsPerPage] = useState(5); // Itens por página

  if (loading) {
    return <Typography variant="h6">Carregando livros...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  // Função para lidar com a mudança de página
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Função para lidar com a mudança do número de itens por página
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
    setPage(1); // Resetando a página para 1 quando mudar o número de itens por página
  };

  // Função para exibir todos os itens
  const handleShowAll = () => {
    setItemsPerPage(books.length); // Definindo o número de itens por página como o total de livros
    setPage(1); // Reinicia a página para a primeira
  };

  // Calculando os itens a serem exibidos na página atual
  const indexOfLastBook = page * itemsPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div className="book-list">
      <Typography variant="h4" gutterBottom>Lista de Livros</Typography>
      {books.length === 0 ? (
        <Typography variant="h6">Não há livros cadastrados.</Typography>
      ) : (
        <>
          <Grid container spacing={2} justifyContent="flex-end">
            <Grid item>
              <Button variant="outlined" color="primary" onClick={handleShowAll}>
                Exibir Todos
              </Button>
            </Grid>
          </Grid>
          
          <List>
            {currentBooks.map((book) => (
              <div key={book.id}>
                <ListItem>
                  <ListItemText
                    primary={<strong>{book.title}</strong>}
                    secondary={`${book.author} - ${book.genre} - ${book.readAt}`}
                  />
                  <Grid container spacing={2}>
                    <Grid item>
                      <Button
                        variant="outlined"
                        color="primary"
                        component={Link}
                        to={`/update/${book.id}`}
                      >
                        Editar
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => deleteBook(book.id)}
                      >
                        Excluir
                      </Button>
                    </Grid>
                  </Grid>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
          
          {itemsPerPage !== books.length && (  // Só exibe a paginação se não estiver mostrando todos os itens
            <Pagination
              count={Math.ceil(books.length / itemsPerPage)} // Número de páginas
              page={page}
              onChange={handlePageChange}
              color="primary"
              siblingCount={1} // Número de páginas ao lado da página atual
              boundaryCount={1} // Número de páginas na borda
              showFirstButton
              showLastButton
              style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default BookList;