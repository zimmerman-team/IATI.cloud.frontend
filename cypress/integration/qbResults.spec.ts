// @ts-nocheck
/// <reference types="cypress" />

const resultsLabels = ["Files"];

describe("Query Builder - output format", function () {
  it("should load the page", function () {
    cy.visit("/querybuilder/results");
    cy.get(":nth-child(4) > #navlink").click();
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
    // todo: add data-cy for different fields
    // cy.get(
    //   ":nth-child(4) > .MuiGrid-grid-xs-12 > .FieldBackdrop__BaseComponent-imspHk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    // ).should("contain.value", "https://");
    // cy.get(
    //   ".layout___StyledGrid2-sc-17o4gbu-1 > .MuiGrid-grid-xs-12 > .FieldBackdrop__BaseComponent-imspHk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    // ).should("contain.value", "https://");
    // cy.get(
    //   ".layout___StyledGrid3-sc-17o4gbu-2 > .MuiGrid-grid-xs-12 > .FieldBackdrop__BaseComponent-imspHk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    // ).should("contain.value", "https://");
  });

  it("should be able to copy the links to clipboard", function () {
    //todo: implement this
    cy.get(
      ":nth-child(4) > .MuiGrid-grid-xs-12 > .FieldBackdrop__BaseComponent-imspHk > .MuiBox-root > .MuiButtonBase-root"
    ).click();
    cy.findByText("Copied!").should("exist");
  });

  it("should be able to download as csv, json and xml", function () {
    //todo: research if asserting on a download is possible
  });
});
