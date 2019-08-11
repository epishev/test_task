import crewPage from '../pages/CrewPage';

describe('Cards toolbar', () => {
    const user = cy;
    beforeEach(() => {
       user.openMainPage();
    });

    it('applied column should have cards without left arrow', () => {
       crewPage.moveAllCardsToColumn('applied');
       crewPage.appliedColumn.crewCard.leftArrow.should('not.exist');
       crewPage.appliedColumn.crewCard.container.then($el => {
           const cardsLength = $el.length;
           crewPage.appliedColumn.crewCard.rightArrow.should('have.length', cardsLength);
       });
    });

    it('interviewing column should have cards with both left and right arrows', () => {
        crewPage.moveAllCardsToColumn('interviewing');
        crewPage.interviewingColumn.crewCard.container.then($el => {
            const cardsLength = $el.length;
            crewPage.interviewingColumn.crewCard.rightArrow.should('have.length', cardsLength);
            crewPage.interviewingColumn.crewCard.leftArrow.should('have.length', cardsLength);
        });
    });

    it('hired column should have cards without right arrow', () => {
        crewPage.moveAllCardsToColumn('hired');
        crewPage.hiredColumn.crewCard.rightArrow.should('not.exist');
        crewPage.hiredColumn.crewCard.container.then($el => {
            const cardsLength = $el.length;
            crewPage.hiredColumn.crewCard.leftArrow.should('have.length', cardsLength);
        });
    });

    it('right arrow should move card into correct column', () => {
        crewPage.moveAllCardsToColumn('applied');
        crewPage.appliedColumn.crewCard.rightArrow.first().click();
        crewPage.interviewingColumn.crewCard.container.should('have.length', 1);
        crewPage.interviewingColumn.crewCard.rightArrow.first().click();
        crewPage.hiredColumn.crewCard.container.should('have.length', 1);
    });

    it('left arrow should move card into correct column', () => {
        crewPage.moveAllCardsToColumn('hired');
        crewPage.hiredColumn.crewCard.leftArrow.first().click();
        crewPage.interviewingColumn.crewCard.container.should('have.length', 1);
        crewPage.interviewingColumn.crewCard.leftArrow.first().click();
        crewPage.appliedColumn.crewCard.container.should('have.length', 1);
    });
});