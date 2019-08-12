import { Then } from "cypress-cucumber-preprocessor/steps";
import crewPage from '../../../pages/CrewPage';

Then("I see {string} column cards don't have {string} arrows", (columnName, arrow) => {
    let column;
    if(columnName === 'Applied') {
        column = crewPage.appliedColumn;
    } else if(columnName === 'Interviewing') {
        column = crewPage.interviewingColumn;
    } else if(columnName === 'Hired') {
        column = crewPage.hiredColumn;
    }
    if(arrow === 'left') {
        column.crewCard.leftArrow.should('not.exist');
        column.crewCard.container.then($el => {
            const cardsLength = $el.length;
            column.crewCard.rightArrow.should('have.length', cardsLength);
        });
    } else if (arrow === 'right') {
        column.crewCard.rightArrow.should('not.exist');
        column.crewCard.container.then($el => {
            const cardsLength = $el.length;
            column.crewCard.leftArrow.should('have.length', cardsLength);
        });
    }
});

Then ("I see Interview column should have all arrows", () => {
    crewPage.interviewingColumn.crewCard.container.then($el => {
        const cardsLength = $el.length;
        crewPage.interviewingColumn.crewCard.rightArrow.should('have.length', cardsLength);
        crewPage.interviewingColumn.crewCard.leftArrow.should('have.length', cardsLength);
    });
});

Then ("I move first card to {string} from {string} column", (arrow, columnName) => {
    let column;
    if(columnName === 'Applied') {
        column = crewPage.appliedColumn;
    } else if(columnName === 'Interviewing') {
        column = crewPage.interviewingColumn;
    } else if(columnName === 'Hired') {
        column = crewPage.hiredColumn;
    }
    if(arrow === 'right') {
        column.crewCard.rightArrow.first().click();
    } else if(arrow === 'left') {
        column.crewCard.leftArrow.first().click();
    }

});

Then("I see {string} column has 1 member card", (columnName) => {
    let column;
    if(columnName === 'Applied') {
        column = crewPage.appliedColumn;
    } else if(columnName === 'Interviewing') {
        column = crewPage.interviewingColumn;
    } else if(columnName === 'Hired') {
        column = crewPage.hiredColumn;
    }
    column.crewCard.container.should('have.length', 1);
});