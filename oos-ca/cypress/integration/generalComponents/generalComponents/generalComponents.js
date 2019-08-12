import { Then } from "cypress-cucumber-preprocessor/steps";
import crewPage from '../../../pages/CrewPage';

Then('I see header is present', () => {
    crewPage.header.container.should('be.visible');
});

Then (`I see header title has {string} text`, (text) => {
    crewPage.header.title.should('have.text', text);
});

Then (`I see header has required logo`, () => {
    crewPage.header.container.matchImageSnapshot('header');
});

Then (`I see {string} column has title {string}`, (columnName, columnTitle) => {
    let column = crewPage.appliedColumn;
     if (columnName === 'Interviewing') {
         column = crewPage.interviewingColumn;
     }
     if(columnName === 'Hired') {
         column = crewPage.hiredColumn;
     }
     column.title.should('have.text', columnTitle);
});

Then('I see all crew cards have photo,name,city, toolbar', () => {
    crewPage.crewCard.container.should('have.length.greaterThan', 0).then($el => {
        const cardsLength = $el.length;
        const cards = crewPage.crewCard;

        cards.photo.should('have.length', cardsLength);
        cards.name.should('have.length', cardsLength);
        cards.city.should('have.length', cardsLength);
        cards.toolBar.should('have.length', cardsLength);
    });
});

Then('I check all filter components work correctly', () => {
    crewPage.crewCard.container.then($el => {
        const cardsLength = $el.length;

        crewPage.filters.container.should('be.visible');
        crewPage.filters.nameInput.type('Test name')
            .should('have.value', 'Test name');
        crewPage.filters.cityInput.type('Test city')
            .should('have.value', 'Test city');
        crewPage.filters.submit();
        crewPage.crewCard.container.should('have.length.lessThan', cardsLength);
        crewPage.filters.clear();
        crewPage.crewCard.container.should('have.length', cardsLength);
    });
});



