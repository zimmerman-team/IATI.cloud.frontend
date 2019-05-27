describe('Testing environment is setup well for Javascript', () => {
  it('Simple assertion works', () => {
    cy.visit('/');
    cy.get('body').should('be.visible');
  });

  it('Is able to make a percy snapshot', () => {
    cy.percySnapshot('Example test');
  });
});
