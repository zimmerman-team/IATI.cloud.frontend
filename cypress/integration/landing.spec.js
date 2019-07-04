describe('Landing page end-to-end test', function() {
  //Here we retrieve the data from the json file before each of our two tests.
  let data;
  beforeEach(() => {
    cy.fixture('landing.json').then(responseData => {
      data = responseData;
    });
  });

  it('should contain the right copy', function() {
    cy.visit('/');
    cy.get('[data-cy=copy-header]').should('have.text', data.copy.header);
    // cy.get('[data-cy=copy-subtitle]').should('have.text', data.copy.subtitle);
    // cy.get('[data-cy=copy-body]').should('have.text', data.copy.body);
    // cy.get('[data-cy=copy-copyright]').should('have.text', data.copy.copyright);
    // cy.get('[data-cy=appbar-title]').should(
    //   'have.text',
    //   data.copy.appbar.title
    // );
    // cy.get('[data-cy=appbar-button1]').should(
    //   'have.text',
    //   data.copy.appbar.button1
    // );
    // cy.get('[data-cy=appbar-button2]').should(
    //   'have.text',
    //   data.copy.appbar.button2
    // );
    // cy.get('[data-cy=appbar-button3]').should('have.text', data.copy.appbar.button3);
    // cy.get('[data-cy=appbar-button4]').should('have.text', data.copy.appbar.button4);
  });
  // it('should contain the correct navigation', function() {
  //   cy.get('.MuiContainer-root > .MuiButtonBase-root').click();
  //   cy.url().should('contain', data.link.querybuilder);
  //   cy.go('back');
  //
  //   // cy.get('[data-cy=link-oipa]')
  //   //   .should('have.attr', 'href')
  //   //   .and('equal', data.link.oipa);
  //   //
  //   // cy.get('[data-cy=link-zimmerman]')
  //   //   .should('have.attr', 'href')
  //   //   .and('equal', data.link.zimmerman);
  // });
});
