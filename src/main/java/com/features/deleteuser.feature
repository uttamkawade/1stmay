@deletebutton
Feature: Multiple Users Delete

Scenario: Delete user test

Given user shuold be on user page for delete button
When delete all users
Then user can logout
