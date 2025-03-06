import React, { useState } from "react";

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addBook({ title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do livro"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default BookForm;
