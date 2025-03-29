import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import './NavBar.css';  // Importando o CSS para a NavBar

const NavBar = () => {
  return (
    <AppBar position="sticky" className="navbar">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Reading Journal
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/books">Livros</Button>
        <Button color="inherit" component={Link} to="/add">Adicionar</Button>
        <Button color="inherit" component={Link} to="/about">Sobre</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;