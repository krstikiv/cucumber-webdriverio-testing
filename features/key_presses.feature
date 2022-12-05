@wip
Feature: Verifying key presses 

Scenario Outline: I can press keys on the keyword and see what I entered

    Given I am on the "key_presses" page
    When I press <key> on the keyboard
    Then I should see the message saying "<message>"

    Examples:
      | key | message |
      | t | You entered: T |
      | c | You entered: C |
      | b | You entered: B |
      | " | You entered: QUOTE |

