describe('Validação da NavBar', () => {
    beforeEach(() => {
      // Carregar a página inicial antes de cada teste
      cy.visit('http://localhost:3000/');
    });
  
    it('Deve exibir a NavBar com os links corretos', () => {  
      // Verifica se os links estão presentes e têm o texto correto
      cy.get('a').contains('Início').should('have.attr', 'href', '/');
      cy.get('a').contains('Livros').should('have.attr', 'href', '/books');
      cy.get('a').contains('Adicionar Livro').should('have.attr', 'href', '/add');
      cy.get('a').contains('Sobre').should('have.attr', 'href', '/about');
    });
  
    it('Deve redirecionar para a página correta ao clicar nos links', () => {
      // Clica no link "Livros" e verifica se a URL é a correta
      cy.get('a').contains('Livros').click();
      cy.url().should('include', '/books');  // Verifica se a URL contém "/books"
  
      // Clica no link "Adicionar Livro" e verifica se a URL é a correta
      cy.get('a').contains('Adicionar Livro').click();
      cy.url().should('include', '/add');  // Verifica se a URL contém "/add"
  
      // Clica no link "Sobre" e verifica se a URL é a correta
      cy.get('a').contains('Sobre').click();
      cy.url().should('include', '/about');  // Verifica se a URL contém "/about"
    });
  
    it('Deve redirecionar para a página inicial ao clicar no inicio', () => {
      cy.get('a').contains('Início').click();  // Verifica se o nome do app é um link
      cy.url().should('eq', 'http://localhost:3000/'); // Verifica se está na página inicial
    });
  });  