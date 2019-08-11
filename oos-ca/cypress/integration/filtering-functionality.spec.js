import crewPage from '../pages/CrewPage';

describe('Filtering functionality', () => {
    const user = cy;
    beforeEach(() => {
        user.openMainPage();
    });

    it('filter by full name should works correctly', () => {
        crewPage.crewCard.name.then($el => {
            const searchName = $el[$el.length - 1].innerText;
            crewPage.filters.useFilter({name: searchName});
            crewPage.crewCard.name.each(name => {
                expect(name.text()).to.eq(searchName);
            });
        });
    });

    it('filter by partial name text should works correctly', () => {
        crewPage.crewCard.name.then($el => {
            const searchName = $el[$el.length - 1].innerText;
            const nameParts = searchName.split(' ');
            nameParts.forEach(partText => {
                crewPage.filters.useFilter({name: partText});
                crewPage.crewCard.name.each(name => {
                    expect(name.text()).to.contain(partText);
                });
                crewPage.filters.nameInput.clear();
            });
        });
    });


    it('filter by city should works correctly', () => {
        crewPage.crewCard.city.then($el => {
            const searchCity = $el[$el.length - 1].innerText;
            crewPage.filters.useFilter({city: searchCity});
            crewPage.crewCard.city.each(name => {
                expect(name.text()).to.eq(searchCity);
            });
        });
    });

    it('filter by partial city text should works correctly', () => {
        crewPage.crewCard.city.then($el => {
            const searchCity = $el[$el.length - 1].innerText;
            const nameParts = searchCity.split(' ');
            nameParts.forEach(partText => {
                crewPage.filters.useFilter({city: partText});
                crewPage.crewCard.city.each(name => {
                    expect(name.text()).to.contain(partText);
                });
                crewPage.filters.cityInput.clear();
            });
        });
    });

    it('filter by partial text for city and name should works correctly', () => {
        crewPage.crewCard.name.then($name => {
            const searchName = $name[$name.length - 1].innerText.substring(0,3);
            crewPage.crewCard.city.then($city => {
                const searchCity = $city[$city.length - 1].innerText.substring(0,3);

                crewPage.filters.useFilter({name:searchName, city: searchCity});
                crewPage.crewCard.name.each(name => {
                    expect(name.text()).to.contain(searchName);
                });
                crewPage.crewCard.city.each(city => {
                    expect(city.text()).to.contain(searchCity);
                });
            });
            });
        });

    it('clear button return all cards into column', () => {
        crewPage.crewCard.container.then( cards => {
            const defaultLength = cards.length;
            crewPage.filters.useFilter({name: '$%@#$@#$@#$@#'});
            crewPage.crewCard.container.should('not.exist');
            crewPage.filters.clear();
            crewPage.crewCard.container.should('have.length', defaultLength);
        });
    });
});