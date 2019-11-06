export class Generic {
  static visit() {
    cy.visit('/', { timeout: 2000 });
    // cy.get('.header-login-button' ).click();
    // cy.getDataCy( 'login-email-input' ).type( user );
    // cy.getDataCy( 'login-pass-input' ).type( pass );
    // cy.getDataCy( 'login-login-button' ).click();
    // cy.url().should('include', '/');
  }
}
