import crewPage from '../pages/CrewPage';

describe('Crew page', () => {
    const user = cy;

    it('first test', () => {
        user.openMainPage();
        crewPage.header.container.should('be.visible');
        crewPage.filters.container.should('be.visible');
        crewPage.moveAllCardsToColumn('hired');


    });
});