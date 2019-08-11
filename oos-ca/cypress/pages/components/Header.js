class Header {
    //ui elements
    get container() {
        return cy.getTest('header');
    }
    get title() {
        return cy.getTest('header-title');
    }
}

export default new Header();