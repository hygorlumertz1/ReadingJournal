import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, AppBar, Toolbar, Typography, Button, Box } from "@mui/material"; // Importando componentes do MUI
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Reading Journal
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Início
            </Button>
            <Button color="inherit" component={Link} to="/books">
              Livros
            </Button>
            <Button color="inherit" component={Link} to="/add">
              Adicionar Livro
            </Button>
            <Button color="inherit" component={Link} to="/about">
              Sobre
            </Button>
          </Toolbar>
        </AppBar>

        <Container sx={{ marginTop: 3 }}>
          <Routes>
            <Route
              path="/"
              element={
                <Box>
                  <Typography variant="h4" gutterBottom>
                    Página Inicial
                  </Typography>
                  <Typography variant="h6">
                    Bem-vindo ao Reading Journal! Acompanhe e organize seus
                    livros aqui.
                  </Typography>
                </Box>
              }
            />
            <Route path="/books" element={<BookList />} />
            <Route path="/add" element={<BookForm />} />
            <Route path="/update/:id" element={<BookForm />} />
            <Route
              path="/about"
              element={
                <Box>
                  <Typography variant="h4" gutterBottom>
                    Sobre
                  </Typography>
                  <Typography variant="body1">
                    Esta é uma aplicação para um CRUD de um Reading Journal.
                    Este projeto é referente à disciplina de Desenvolvimento de
                    Sistema Frontend.
                  </Typography>
                </Box>
              }
            />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;