describe('Deletando um livro', () => {
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
    
  
    it('Deve excluir um livro quando o botão de excluir for clicado', () => {
        // Visitar a página onde o botão "Excluir" está
        cy.visit('/books'); // Certifique-se de usar a URL correta onde a lista de livros é exibida
        
        // Esperar que os livros estejam carregados
        cy.intercept('GET', 'http://localhost:5000/books').as('getBooks'); // Intercepta a chamada à API que retorna os livros
        cy.wait('@getBooks'); // Espera até que a resposta da API seja recebida
        
        // Encontrar o botão "Excluir" e clicar nele
        cy.get('button').contains('Excluir').first().click(); // Clica no botão "Excluir"
        
        // Após o clique, pode ser necessário esperar o estado ser atualizado (como uma nova chamada de API)
        cy.wait('@getBooks'); // Espera a API ser chamada novamente após a exclusão
    
        // Verificar se a lista de livros foi atualizada (deve diminuir o número de livros)
        cy.get('ul li').should('have.length', 4); // Ajuste o número conforme o número de livros após a exclusão
      });
  });