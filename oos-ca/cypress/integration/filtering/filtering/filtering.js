import {Then} from "cypress-cucumber-preprocessor/steps";
import crewPage from '../../../pages/CrewPage';

When("I am looking at {string} input on the filter section", (input) => {
    const filterInput = input === 'name' ? crewPage.filters.nameInput : crewPage.filters.cityInput;
    filterInput.should('be.visible')
});

Then("I check that filter by full name works as expected", () => {
    crewPage.crewCard.name.then($el => {
        const searchName = $el[$el.length - 1].innerText;
        crewPage.filters.useFilter({name: searchName});
        crewPage.crewCard.name.each(name => {
            expect(name.text()).to.eq(searchName);
        });
    });
});

Then("I check that filter by partial name text works as expected", () => {
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

Then("I check that filter by city works as expected", () => {
    crewPage.crewCard.city.then($el => {
        const searchCity = $el[$el.length - 1].innerText;
        crewPage.filters.useFilter({city: searchCity});
        crewPage.crewCard.city.each(name => {
            expect(name.text()).to.eq(searchCity);
        });
    });
});

Then("I check that filter by partial city text works as expected", () => {
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

Then("I check that filter by partial city and name text works as expected", () => {
    crewPage.crewCard.name.then($name => {
        const searchName = $name[$name.length - 1].innerText.substring(0, 3);
        crewPage.crewCard.city.then($city => {
            const searchCity = $city[$city.length - 1].innerText.substring(0, 3);

            crewPage.filters.useFilter({name: searchName, city: searchCity});
            crewPage.crewCard.name.each(name => {
                expect(name.text()).to.contain(searchName);
            });
            crewPage.crewCard.city.each(city => {
                expect(city.text()).to.contain(searchCity);
            });
        });
    });
});

Then("I check that clear button remove all cards to columns", () => {
    crewPage.crewCard.container.then(cards => {
        const defaultLength = cards.length;
        crewPage.filters.useFilter({name: '$%@#$@#$@#$@#'});
        crewPage.crewCard.container.should('not.exist');
        crewPage.filters.clear();
        crewPage.crewCard.container.should('have.length', defaultLength);
    });
});
