
@wip
Feature: Testing adding and deleting elements

 Background: 
        Given I am on the "add_remove_elements/" page

    Scenario: I can check if Add Element button exists
        Then I should be able to see the "Add Element" button

    Scenario: I can check correct Add Element button text
        Then I should be able to see the "Add Element" text

    Scenario: I can create a new element
        When I can click on the Add Element button
        Then I should be able to see a new "Delete" button

    Scenario: I can delete an element
        When I can click on the Delete Element button
        Then I should see the element removed from the page

    Scenario: I can create more than one element
        When I can click on the Add Element button again
        Then I should see another new element added
