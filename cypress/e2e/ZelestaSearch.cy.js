/// <reference types="Cypress" />
import KameleoonBar from "../support/PageObjects/KameleoonBar"
import TestPage from "../support/PageObjects/TestPage";

Cypress.on('uncaught:exception', (err, runnable) => {
  // Custom handling of the uncaught exception, e.g., log the error, take a screenshot, etc.
  // You can also use 'throw err' to fail the test explicitly.
  return false; // Prevent Cypress from failing the test due to the uncaught exception.
});
// In your Cypress test file:
beforeEach(() => {
  cy.viewport(375, 667); // Width x Height
});

describe('Test suite Turnmeroyal', () => {
  it('PDP_01_testcase', () => {
    cy.visit('https://zelesta.nl/?kameleoon-experiment-id=205696&kameleoon-simulation=server-call-hyjn7em08g')
    cy.wait(4000);
    // Set the Kameleoon
    const kameleoonBar = new KameleoonBar();
    kameleoonBar.getTheFirstTest().click();
    kameleoonBar.getTheFirstTestDropDown().contains('Variation 1').click();
    cy.wait(4000);
    kameleoonBar.getCloseToolBar().click();

    // Open the test (search)
    const testPage = new TestPage;
    testPage.getSearchBtn().click();
  
    // UI verifications for collections 
    const elementsToVerify = [
      { selector: '.acc-category-link', property: 'color', expectedValue: 'rgba(0, 0, 0, 0.7)' },
      { selector: '.acc-category-link', property: 'font-size', expectedValue: '14px' },
      { selector: '.acc-category-link', property: 'font-weight', expectedValue: '400' },
      { selector: '.acc-category-link', property: 'cursor', expectedValue: 'pointer' },
      // Add more elements as needed with their respective properties and expected values
    ];
    cy.wrap(elementsToVerify).each((element) => {
      cy.get(element.selector).should('have.css', element.property, element.expectedValue);
    });
  });
});