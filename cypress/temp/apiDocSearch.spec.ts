// @ts-nocheck
/// <reference types="cypress" />

describe("API Documentation - search", function () {
  // autoRecord();

  it("should load the page", function () {
    cy.visit("/documentation");
  });

  it('should be able to type in "as" and only get results with "as" in it', function () {
    cy.get("[class*= ApiDocSearchBoxContainer]").should("exist");
    cy.get(".MuiInputBase-input").type("as");
    cy.get("[class*= SubItemContainer]").should("contain.text", "as");
  });
});
