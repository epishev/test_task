import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import crewPage from '../../pages/CrewPage';

Given('I open main page', () => {
    cy.openMainPage();
})

When('I move all cards to {string} column', (columnName) => {
    crewPage.moveAllCardsToColumn(columnName);
});