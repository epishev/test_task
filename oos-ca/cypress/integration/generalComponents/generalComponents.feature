Feature: Crew members page
  I want to check all required components on the page

  Background:
    Given I open main page

  Scenario: Header should be present and has required logo and title
    When I am looking at header on the Page
    Then I see header title has "OpenOceanStudio: Crew Applications" text
    And I see header has required logo

  Scenario: Columns should have required title
    When I am looking at table section on the Page
    Then I see "Applied" column has title "Applied"
    And I see "Interviewing" column has title "Interviewing"
    And I see "Hired" column has title "Hired"

  Scenario: Member cards should be present and have all required elements
    When I am looking at table section on the Page
    Then I see all crew cards have photo,name,city, toolbar

  Scenario: Filters component should have required elements
    When I am looking at filter section on the Page
    Then I check all filter components work correctly