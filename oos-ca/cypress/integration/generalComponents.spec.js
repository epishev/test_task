import crewPage from '../pages/CrewPage';

describe('Crew page', () => {
    const user = cy;

    beforeEach(() => {
        user.openMainPage();
    });

    it('header component should be present and has required logo and title', () => {
        crewPage.header.container.should('be.visible');
        crewPage.header.title.should('have.text', 'OpenOceanStudio: Crew Applications');
        crewPage.header.container.matchImageSnapshot('header');
    });

    it('columns should have required title', () => {
        crewPage.appliedColumn.title.should('have.text', 'Applied');
        crewPage.interviewingColumn.title.should('have.text', 'Interviewing');
        crewPage.hiredColumn.title.should('have.text', 'Hired');
    });

    it('crew member cards should be present on the page and have all required elements', () => {
        crewPage.crewCard.container.should('have.length.greaterThan', 0).then($el => {
            const cardsLength = $el.length;
            const cards = crewPage.crewCard;

            cards.photo.should('have.length', cardsLength);
            cards.name.should('have.length', cardsLength);
            cards.city.should('have.length', cardsLength);
            cards.toolBar.should('have.length', cardsLength);
        });
    });

    it('filters component should have required elements', () => {
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
});