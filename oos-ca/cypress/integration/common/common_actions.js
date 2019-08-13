import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import crewPage from '../../pages/CrewPage';

Given('I open main page', () => {
    cy.openMainPage();
})

When('I move all cards to {string} column', (columnName) => {
    crewPage.moveAllCardsToColumn(columnName);
});

When('I am looking at filter section on the Page', () => {
    crewPage.filters.container.should('be.visible');
});