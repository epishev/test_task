import CrewCard from './CrewCard';

class CrewColumn {
    constructor(columnName) {
        this.parentLocator = `${columnName}-column`;
        this.crewCard = new CrewCard(columnName);
    }

    get container() {
        return cy.getTest(this.parentLocator);
    }

    get title() {
        return this.container.find('h2');
    }
}

export default CrewColumn;