# Created by yasin at 12.06.2022
Feature: Greeter should greet when called
  # When called greeter will display hello world

  @someTag
  Scenario: Alice is greeted with hello world
    When Alice calls greeter function
    Then She will be greeted with Hello World message.

  @someTag
  Scenario: Users can set the greeting message
    When Bob calls set greet function and change the message
    Then New message will be displayed


