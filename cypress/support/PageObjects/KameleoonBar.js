class KameleoonBar {
    getTheFirstTest(){
        return cy.get('.kn-simulations-table .kn-dropdown__shown-element');
    }
    getTheFirstTestDropDown(){
        return cy.get('.kn-dropdown__option')
    }
    getCloseToolBar(){
        return cy.get('.kn-sm-hide-button')
    }
}
export default KameleoonBar;