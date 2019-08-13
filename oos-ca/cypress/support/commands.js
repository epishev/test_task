Cypress.Commands.add('openMainPage', () => {
    return cy.visit('/');
});

Cypress.Commands.add('getTest', (selector, opts) => {
    const finalSelector = `[data-test="${selector}"]`;
    return cy.get(finalSelector, opts);
});

import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();

