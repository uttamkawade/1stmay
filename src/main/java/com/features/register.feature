@register
Feature: Registration of student

Scenario: register test

Given user should be in login page for register
When click on the registerlink 
And user add all details and click the submit button
Then user can see alert

