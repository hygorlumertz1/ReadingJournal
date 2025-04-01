// cypress/support/e2e.js

// Adicionando um comando customizado de login, por exemplo
Cypress.Commands.add('login', (username, password) => {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  });
  
  // Configurações globais que se aplicam a todos os testes podem ser colocadas aqui  