@adduser
Feature: Add new Users

Scenario: adduser test

Given user should be on user page and click Adduser button
When user can add all details 
And submit button can click
Then user see alert to confirm
