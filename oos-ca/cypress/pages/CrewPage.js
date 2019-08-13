import header from './components/Header';
import filters from './components/Filters';
import Column from './components/CrewColumn';
import CrewCard from './components/CrewCard';

class CrewPage {
    header = header;
    filters = filters;
    appliedColumn = new Column('applied');
    interviewingColumn = new Column('interviewing');
    hiredColumn = new Column('hired');
    crewCard = new CrewCard();

    get tableBody() {
        return cy.getTest('crews-table-container');
    }

    moveAllCardsToColumn(columnName) {
        switch (columnName) {
            case 'applied':
                this.hiredColumn.crewCard.leftArrow.each($arrow => {
                    cy.wrap($arrow).click();
                });
                this.interviewingColumn.crewCard.leftArrow.each($arrow => {
                    cy.wrap($arrow).click();
                });
                break;
            case 'interviewing':
                this.appliedColumn.crewCard.rightArrow.each($arrow => {
                    cy.wrap($arrow).click();
                });
                this.hiredColumn.crewCard.leftArrow.each($arrow => {
                    cy.wrap($arrow).click();
                });
                break;
            case 'hired':
                this.appliedColumn.crewCard.rightArrow.each($arrow => {
                    cy.wrap($arrow).click();
                });
                this.interviewingColumn.crewCard.rightArrow.each($arrow => {
                    cy.wrap($arrow).click();
                });
            default:
                cy.log('Wrong column name!!');
        }
    }
}

export default new CrewPage();