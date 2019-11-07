/// <reference types="cypress" />

import { Generic } from '../generic/visit';

describe('Flight Test Suite', () => {
  beforeEach(() => {
    cy.viewport(1600, 800);
  });

  it('Buttons Panel', () => {
    Generic.visit();
    // Login button
    cy.get('#gb_70').should('have.length', 1);

    // Clean
    // cy.get('input').first().clear();
    // cy.get('input').first().next().clear();

    // // Type a flight
    // cy.get('app-create-item').should('have.length', 1);
    // cy.get('input').first().type('flight 1');
    // cy.get('input').first().next().type('http://portela');
    // cy.get('button').click();

    // // Check last item
    // cy.get('app-flight-test').should('have.length', 1);
    // cy.get('app-flight-test').should('exist');
    // cy.get('app-flight-test')
    //   .children()
    //   .should('have.length.greaterThan', 1);
    // cy
    //   .get('app-flight-test > :last-child > div')
    //   .should('have.length', 1)
    //   .should('contain', 'flight 1' );
  });

  it('Page Layout', () => {
    // Google Logo
    cy.get('#hplogo').should('be.visible');
    // .should('have.css', 'font-family')
    // .and('match', /serif/)
  });
});
