@wip
Feature: Testing hover functionality

 Background: 
        Given I am on the "hovers" page

  Scenario: I am able to hover over an image
   When I hover over an image
   Then I should see new details

  Scenario: I am able to click on User1's View Profile link
   When I click on user1's View Profile
   Then I see the user1's page

