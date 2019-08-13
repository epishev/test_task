class CrewCard {
    constructor(parentLocator = 'crew-card-container') {
        this.containerLocator = parentLocator;
        this.elementLocator = value => `[data-test="crew-card-${value}"]`;
    }

    //ui elements
    get container() {
        if (this.containerLocator === 'crew-card-container') {
            return cy.getTest('crew-card-container');
        }
        return cy.get(`[data-test="${this.containerLocator}-column"]`)
            .find(`${this.elementLocator('container')}`);
    }

    get photo() {
        return this.container.find(`${this.elementLocator('photo')}`);
    }

    get name() {
        return this.container.find(`${this.elementLocator('name')}`);
    }

    get city() {
        return this.container.find(`${this.elementLocator('city')}`);
    }

    get toolBar() {
        return this.container.find(`${this.elementLocator('toolbar')}`);
    }

    get leftArrow() {
        return this.container.find(`${this.elementLocator('left-button')}`);
    }

    get rightArrow() {
        return this.container.find(`${this.elementLocator('right-button')}`);
    }

    //ui actions
    moveLeft() {
        this.leftArrow.click();
        return this;
    }

    moveRight() {
        this.rightArrow.click();
        return this;
    }
}

export default CrewCard;