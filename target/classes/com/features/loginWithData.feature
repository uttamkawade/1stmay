@data
Feature: jbk offline login with data

Scenario Outline: jbk test data login test

Given user should lounch "file:///C:/Program%20Files/Selelium%20Software/Offline%20Website/Offline%20Website/index.html"
When user enter "<uname>" and "<pass>" and click the button
Then user can Verify the title

Examples: 
|uname            |pass  | 
|kiran@gmail.com  |123456|
|mangesh@gmail.com|qwerty|
|neelam@gmail.com |asdfgh|