class KameleoonBarCoconat {
    getTheFirstTest(){
        return cy.get('div.kn-sm.kn-panel-visibility div.kn-panel-content div.kn-tabs div.kn-tabs__active-tab.kn-experiments-tab.kn-tabs__selected-tab:nth-child(1) div.kn-simulations-table.kn-simulation-for-mobile div.kn-experience-data.kn-simulated-experience-data div.kn-experience-displayed-column div.kn-experience-dropdown div.kn-dropdown > div.kn-dropdown__shown-element');
    }
    getTheFirstTestDropDown(){
        return cy.get('.kn-dropdown__option')
    }
    getCloseToolBar(){
        return cy.get('.kn-sm-hide-button')
    }
}
export default KameleoonBarCoconat;