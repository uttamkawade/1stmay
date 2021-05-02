@login
Feature: jbk offline application

Scenario: login test

Given user should be in login page
When enter a username and password and clik the login button
Then user will be on the home page


Scenario: verify logo

Given user should be in login page for logo
Then user see the logo
