/// <reference types="cypress" />

const categories: string[] = [
  "Activity List",
  "Activity Detail",
  "Dataset List",
  "Budget List",
  "Budget Aggregations",
  "Codelist Meta List",
  "Country List",
  "Location List",
  "Organisation List",
  "Publisher List",
  "Region List",
  "Result List",
  "Result Aggregations",
  "Sector List",
  "Transaction List",
  "Transaction Aggregations",
  "DataStore Search Engine"
]

describe('API Documentation - navigation', function() {

  it('should load the page', function() {
    cy.visit('/documentation');
  });

  it('should contain the correct categories', function() {
    for (let index = 1; index < categories.length; index++) {
      const element = categories[index - 1];
      cy.get(`[class *= CategoryContainer]:nth-child(${index}) > [class *= CustomLink]`).should('contain.text', element)
    }
  });

  it('should navigate to correct item when clicked', function() {
    // Weird behavior in headless browser, therefore checking on url instead of content.
    cy.get(`[class *= CategoryContainer]:nth-child(1) > [class *= CustomLink]`).click()
    cy.url().should('contain', 'Activity%20List')
  });
});
