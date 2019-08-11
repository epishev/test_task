import crewPage from '../pages/CrewPage';

describe('Cards toolbar', () => {
    const user = cy;
    beforeEach(() => {
       user.openMainPage();
       crewPage.moveAllCardsToColumn('Applied');
    });

    it('applied column should have cards without left arrow', () => {
       crewPage.appliedColumn.crewCard.leftArrow.should('')
    });
})