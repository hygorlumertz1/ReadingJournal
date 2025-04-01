describe('Update livro', () => {
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
  
    it('Deve editar um livro"', () => {
        cy.wait('@getBooks');
    
        // Verifica se a lista de livros foi renderizada
        cy.get('.book-list').should('exist');
        cy.get('ul li').should('have.length', 5);  // Verifica se 5 livros foram exibidos
    
        // Clica no botão de editar o primeiro livro
        cy.get('a[href="/update/1"]').click(); // Clica no link de edição do primeiro livro
        // Verifica se o formulário de edição foi aberto
        cy.url().should('include', '/update/1'); // Verifica se a URL contém "/edit/1"
    
        // Preencher o formulário
        cy.get('input[name="title"]').clear().type('Update Livro');
        cy.get('input[name="author"]').clear().type('Update');
        cy.get('input[name="genre"]').clear().type('Ficção');
        cy.get('input[name="readAt"]').clear().type('2023-06-01');

        // Enviar o formulário
        cy.contains('button', 'Atualizar Livro').click();
    });
  });