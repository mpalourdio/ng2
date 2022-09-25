describe('My First Test', () => {
    it('should display message saying hello world', () => {
        cy.visit('/');
        cy.contains('Hello World!');
    });
});
