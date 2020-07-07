// @ts-nocheck
/// <reference types="cypress" />

const additionalFiltersLabels = [
  "Search in title, activity or description",
  "Transaction Provider Org",
  "Transaction Receiver Org",
  "Participating Organisation",
];

describe("Query Builder - Additional filters", function () {
  it("should load the page", function () {
    cy.visit("/querybuilder/additional-filters");
  });

  it("should show the correct text", function () {
    additionalFiltersLabels.forEach((text) => {
      cy.get(`[label= "${text}"]`).should("exist");
    });
    comparePlaceholderText();
  });

  it("should show navigations", function () {
    cy.findByTestId("AppBar").should("exist");
    cy.get('[href="/querybuilder/core-filters"]').should("exist");
    cy.get(".active");
    cy.get('[href="/querybuilder/output-format"]').should("exist");
    cy.get('[href="/querybuilder/results"]').should("exist");
  });

  it("should be able to select all fields", function () {
    testSelect("All transaction provider organisations", 2, 2);
    testSelect("All transaction receiver organisations", 3, 1);
    testSelect("All participating organisations", 4, 2);
  });

  // todo: find a way to click outside of the popup
  it("should be able to add a filter", function () {
    // cy.get('.MuiGrid-grid-md-4 > .MuiButtonBase-root').click();
    // cy.get('.MuiList-root > :nth-child(2)').click();
    // cy.get('div').click({multiple: true, force: true});
    // cy.get('[class *= StepNavigatorContainer]').click({force: true})
    // testSelect("All activity statuses", 5, 0);
  });

  it("should be able to navigate to the next page", function () {
    cy.get(":nth-child(2) > a > .MuiButtonBase-root").click();
  });
});

function comparePlaceholderText() {
  cy.findByText("All transaction provider organisations").should("exist");
  cy.findByText("All transaction receiver organisations").should("exist");
  cy.findByText("All participating organisations").should("exist");
}

function testSelect(
  selector: string,
  selectNumber: number,
  optionNumber: number
) {
  cy.findByText(selector).click();
  cy.get(`#react-select-${selectNumber}-option-${optionNumber}`).then(
    ($span) => {
      const selectText: string = $span.text();
      cy.get(`#react-select-${selectNumber}-option-${optionNumber}`).click();
      cy.get(`[class*=multiValue]`).last().should("have.text", selectText);
    }
  );
}
