// @ts-nocheck
/// <reference types="cypress" />

const resultsLabels = ["Files"];

describe("Query Builder - output format", function () {
  it("should load the page", function () {
    cy.visit("/querybuilder/results");
  });

  it("should show the correct text", function () {
    cy.findByText("Files").should("exist");
  });

  it("should show navigations", function () {
    cy.findByTestId("AppBar").should("exist");
    cy.get('[href="/querybuilder/core-filters"]');
    cy.get('[href="/querybuilder/additional-filters"]').should("exist");
    cy.get('[href="/querybuilder/output-format"]').should("exist");
    cy.get(".active").should("exist");
  });

  it("should show links", function () {
    //Links here are going to change.
    cy.get(
      ":nth-child(3) > .MuiGrid-container > .MuiGrid-grid-xs-12 > .FieldBackdrop__BaseComponent-ayhoci-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    ).should("contain.value", "https://");
    cy.get(
      ":nth-child(4) > .MuiGrid-container > .MuiGrid-grid-xs-12 > .FieldBackdrop__BaseComponent-ayhoci-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    ).should("contain.value", "https://");
    cy.get(
      ":nth-child(5) > .MuiGrid-container > .MuiGrid-grid-xs-12 > .FieldBackdrop__BaseComponent-ayhoci-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    ).should("contain.value", "https://");
  });

  it("should be able to copy the links to clipboard", function () {
    //todo: implement this
    cy.get(
      ":nth-child(3) > .MuiGrid-container > .MuiGrid-grid-xs-12 > .FieldBackdrop__BaseComponent-ayhoci-0 > .MuiBox-root > .MuiButtonBase-root"
    ).click();
  });

  it("should be able to download as csv, json and xml", function () {
    //todo: research if asserting on a download is possible
  });
});
