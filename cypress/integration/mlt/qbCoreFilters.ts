/// <reference types="cypress" />

import autoRecord from 'cypress-autorecord';

const coreFiltersLabels = [
"Reporting Organisation", "Type of Organisation", "Secondary Reporter?", "Sector Category", "Sector", "Recipient Country", "Recipient Region", "Filter by Date?", "Activity / Budget start date (from)", "Activity / Budget end date (from)", "Activity / Budget start date (to)", "Activity / Budget end date (to)"
];

describe('Query Builder - core filters', function() {
  // autoRecord();

  it('should load the page', function() {
    cy.visit('/querybuilder/core-filters');
  });

  it('should show the correct text', function() {
    coreFiltersLabels.forEach(text => {cy.get(`[label= "${text}"]`).should('exist')});
    comparePlaceholderText()
  });

  it('should show navigations', function() {
    cy.findByTestId('AppBar').should('exist');
    cy.get('.active')
    cy.get('[href="/querybuilder/additional-filters"]').should('exist')
    cy.get('[href="/querybuilder/output-format"]').should('exist')
    cy.get('[href="/querybuilder/results"]').should('exist')
  });

  it('should be able to select all fields', function() {
    testSelect(".organisationNameSelect", 2, 0)
    testSelect(".organisationTypeSelect", 3, 0)
    testSelect(".secondaryReporterSelect", 4, 0)
    testSelect(".sectorCategorySelect", 5, 0)
    testSelect(".organisationSectorSelect", 6, 0)
    testSelect(".recipientCountrySelect", 7, 0)
    testSelect(".recipientRegionSelect", 8, 0)
  });

  it('should be able to navigate to the next page', function() {
    cy.get('a > .MuiButtonBase-root').click();
  });

function comparePlaceholderText(){
    cy.get('.organisationNameSelect').should('have.text', "All organisations");
    cy.get('.organisationTypeSelect').should('have.text', "All organisation types");
    cy.get('.secondaryReporterSelect').should('have.text', "All options");
    cy.get('.sectorCategorySelect').should('have.text', "All categories");
    cy.get('.organisationSectorSelect').should('have.text', "All sectors");
    cy.get('.recipientCountrySelect').should('have.text', "All countries");
    cy.get('.recipientRegionSelect').should('have.text', "All regions");
}

function testSelect(selector: string, selectNumber: number,  optionNumber: number){
  cy.get(selector).click();
    cy.get(`#react-select-${selectNumber}-option-${optionNumber}`).then(($span) => {
      const selectText : string = $span.text()
      cy.get(`#react-select-${selectNumber}-option-${optionNumber}`).click();
      cy.get(`[class*=multiValue]`).last().should('have.text', selectText);
    })
}})
