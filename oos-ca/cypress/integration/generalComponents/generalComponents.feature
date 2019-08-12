
Feature: Crew members page
    I want to check all required components on the page

    Scenario: Header should be present and has required logo and title
      Given I open main page
      Then I see header is present
      And I see header title has "OpenOceanStudio: Crew Applications" text
      And I see header has required logo

    Scenario: Columns should have required title
      Given I open main page
      Then I see "Applied" column has title "Applied"
      And I see "Interviewing" column has title "Interviewing"
      And I see "Hired" column has title "Hired"

    Scenario: Member cards should be present and have all required elements
      Given I open main page
      Then I see all crew cards have photo,name,city, toolbar

    Scenario: Filters component should have required elements
      Given I open main page
      Then I check all filter components work correctly