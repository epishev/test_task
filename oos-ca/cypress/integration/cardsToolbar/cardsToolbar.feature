
Feature: Cards toolbar functionality

    I want to check that right and left arrows on the cards work correctly

    Scenario: Applied column should have cards without left arrow
        Given I open main page
        When I move all cards to "applied" column
        Then I see "Applied" column cards don't have "left" arrows

    Scenario: Hired column should have cards without right arrow
        Given I open main page
        When I move all cards to "hired" column
        Then I see "Hired" column cards don't have "right" arrows

    Scenario: Interviewing column should have cards with both left and right arrows
        Given I open main page
        When I move all cards to "interviewing" column
        Then I see Interview column should have all arrows

    Scenario: Right arrow should move card into correct column
        Given I open main page
        When I move all cards to "applied" column
        Then I move first card to "right" from "Applied" column
        And I see "Interviewing" column has 1 member card
        Then I move first card to "right" from "Interviewing" column
        And I see "Hired" column has 1 member card

    Scenario: Left arrow should move card into correct column
        Given I open main page
        When I move all cards to "hired" column
        Then I move first card to "left" from "Hired" column
        And I see "Interviewing" column has 1 member card
        Then I move first card to "left" from "Interviewing" column
        And I see "Applied" column has 1 member card