@wip
Feature: Testing checkbox state

    Background: 
        Given I am on the "checkboxes" page

    @uncheckedboxes
    Scenario: I can check default checkbox 1 state
        Then I should see checkbox 1 unselected as default
    
    @checkedboxes
    Scenario: I can check default checkbox 2 state
        Then I should see checkbox 2 selected as default

    @checkedboxes
    Scenario: As a user, I can select a checkbox
        When I click on checkbox 1
        Then I should see checkbox 1 selected

    @uncheckedboxes
    Scenario: As a user, I can unselect a checkbox
        When I click on checkbox 2
        Then I should see checkbox 2 unselected
