describe('Inserindo um livro', () => {
    beforeEach(() => {
        // Visitar a página de adicionar livro
        cy.visit('http://localhost:3000/add');
    });

    it('Deve adicionar um livro corretamente', () => {
        // Preencher o formulário
        cy.get('input[name="title"]').type('Livro 6');
        cy.get('input[name="author"]').type('Autor 6');
        cy.get('input[name="genre"]').type('Ficção');
        cy.get('input[name="readAt"]').type('2023-06-01');

        // Enviar o formulário
        cy.contains('button', 'Adicionar Livro').click();

        // Verifica se o redirecionamento ocorreu corretamente
        cy.url().should('include', '/books'); // Verifica se a URL contém "/books"

        // Opcional: Verifica se o livro foi adicionado na lista
        cy.contains('Livro 6').should('exist');
    });
});