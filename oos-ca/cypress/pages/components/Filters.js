class Filters {
    //ui elements
    get container() {
        return cy.getTest('filters-container');
    }

    get nameInput() {
        return cy.getTest('filters-name-input');
    }

    get cityInput() {
        return cy.getTest('filters-city-input');
    }

    get submitButton() {
        return cy.getTest('filters-submit');
    }

    get clearButton() {
        return cy.getTest('filters-clear');
    }

    //ui methods
    submit() {
        this.submitButton.click();
        return this;
    }
    clear() {
        this.clearButton.click();
        return this;
    }

    useFilter(config) {
        if(config.name) {
            this.nameInput.type(config.name);
        }
        if(config.city) {
            this.cityInput.type(config.city);
        }
        if(!config.name && !config.city) {
            throw new Error('Incorrect method usage: Need to enter some text in the input fields!!');
        }
        this.submit();
    }
}

export default new Filters();