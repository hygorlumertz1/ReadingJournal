// cypress/integration/bookList.e2e.spec.js

describe('Testes de E2E do Componente BookList', () => {
    // Interceptação da API para simular a resposta da API
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:5000/books', {
        statusCode: 200,
        body: [
          { id: 1, title: 'Livro 1', author: 'Autor 1', genre: 'Ficção', readAt: '2023-01-01' },
          { id: 2, title: 'Livro 2', author: 'Autor 2', genre: 'Ficção', readAt: '2023-02-01' },
          { id: 3, title: 'Livro 3', author: 'Autor 3', genre: 'Mistério', readAt: '2023-03-01' },
          { id: 4, title: 'Livro 4', author: 'Autor 4', genre: 'História', readAt: '2023-04-01' },
          { id: 5, title: 'Livro 5', author: 'Autor 5', genre: 'Ficção', readAt: '2023-05-01' },
        ],
      }).as('getBooks');
  
      // Visitar a página de livros
      cy.visit('http://localhost:3000/books');
    });
  
    it('Deve renderizar a lista de livros corretamente', () => {
      // Espera a interceptação da API
      cy.wait('@getBooks');
  
      // Verifica se a lista de livros foi renderizada
      cy.get('.book-list').should('exist');
      cy.get('ul li').should('have.length', 5);  // Verifica se 5 livros foram exibidos
      cy.get('ul li').first().should('contain', 'Livro 1');
      cy.get('ul li').first().should('contain', 'Autor 1');
    });
  
    it('Deve exibir todos os livros ao clicar em "Exibir Todos"', () => {
      cy.wait('@getBooks');
      cy.get('button').contains('Exibir Todos').click();
  
      // Verificar se todos os livros são exibidos
      cy.get('ul li').should('have.length', 5);  // Verifica que os livros estão sendo exibidos
    });
  });
  