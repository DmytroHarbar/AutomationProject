import KameleoonBarCoconat from "../support/PageObjects/KameleoonBarCoconat";

Cypress.on('uncaught:exception', (err, runnable) => {
  // Custom handling of the uncaught exception, e.g., log the error, take a screenshot, etc.
  // You can also use 'throw err' to fail the test explicitly.
  return false; // Prevent Cypress from failing the test due to the uncaught exception.
});

describe('Product UI Verification', () => {
  it('should verify UI elements on all product pages', () => {

    cy.visit('https://cocunat.com/en-int/products/savior-en?kameleoon-experiment-id=206927&kameleoon-simulation=server-call-oouzz4dpr4')
    const kameleoonBar = new KameleoonBarCoconat();
        kameleoonBar.getTheFirstTest().click();
        kameleoonBar.getTheFirstTestDropDown().contains('Variation 1').click();
        cy.wait(4000);
        kameleoonBar.getCloseToolBar().click();

        // Add your Cypress test code to verify the UI elements on the product page
        // For example:
        cy.scrollTo(0, 500)
        cy.get('.thumbnail-list').should('be.visible');

    // Read the product links from the 'product_links.txt' file
    cy.readFile('product_links.txt').then((content) => {
      const productLinks = content.split('\n')
      // Visit each product link and verify UI elements
           
        productLinks.forEach((productLink) => {
        cy.visit(productLink + '?kameleoon-experiment-id=206927', {failOnStatusCode: false});

        // Add your Cypress test code to verify the UI elements on the product page
        // For example:
        cy.scrollTo(0, 500)
        cy.get('.thumbnail-list').should('be.visible');

        // You can add more test cases based on the elements you want to verify
      });
    });
  });
});