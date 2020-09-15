// @ts-nocheck
/// <reference types="cypress" />

const homeText: string[] = [
  'IATI Datastore',
  /* ------------------- */
  'The IATI Datastore provides data on development and humanitarian spending and projects that address poverty and crises across the world.',
  /* ------------------- */
  'Find data published by organisations from governments, development finance institutions and UN agencies to NGOs, foundations and the private sector. They have published data according to the IATI Standard, our set of rules and guidance for sharing useful, open data.',
  'Access data through using the Datastore’s API or Query Builder.',
  /* ------------------- */
  'About Datastore',
  /* ------------------- */
  'The Datastore makes use of iati.cloud, an open-source native IATI data service developed by Zimmerman. IATI.cloud extracts and stores raw IATI XML files from the IATI Registry and makes it available as API endpoints to build data driven information solutions.',
  /* ------------------- */
  'Use the Query Builder to easily search IATI data based on selected filters and have it returned in spreadsheet (CSV or XLS), JSON and XML formats.',
  /* ------------------- */
  'API Documentation',
  /* ------------------- */
  'For guidance on how to form API queries and the available API endpoints and filters please see the IATI.cloud technical documentation.',
];

describe('Home', function () {
  // autoRecord();

  it('should load the page', function () {
    cy.visit('/');
  });

  it('should show correct text', function () {
    homeText.map((text) => cy.findAllByText(text).should('exist'));
  });

  it('should show navigation and footer', function () {
    cy.findByTestId('AppBar').should('exist');
    cy.findByTestId('Footer').should('exist');
  });

  it('make screenshot', () => {
    cy.get('body').happoScreenshot({ component: 'Home page' });
  });
});
