Feature: Filtering functionality
  I want to check that filters work correctly

  Background:
    Given I open main page

  Scenario: Filter by full name should works correctly
    When I am looking at "name" input on the filter section
    Then I check that filter by full name works as expected

  Scenario: Filter by partial name text should works correctly
    When I am looking at "name" input on the filter section
    Then I check that filter by partial name text works as expected

  Scenario: Filter by city should works correctly
    When I am looking at "city" input on the filter section
    Then I check that filter by city works as expected

  Scenario: Filter by partial city text should works correctly
    When I am looking at "city" input on the filter section
    Then I check that filter by partial city text works as expected

  Scenario: Filter by partial text for city and name should works correctly
    When I am looking at filter section on the Page
    Then I check that filter by partial city and name text works as expected

  Scenario: Clear button return all cards into columns
    When I am looking at filter section on the Page
    Then I check that clear button remove all cards to columns