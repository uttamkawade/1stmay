@registerdata
Feature: jbk offline register

Scenario Outline: resister with multiple data

Given user if register new data it should lounch "file:///C:/Program%20Files/Selelium%20Software/Offline%20Website/Offline%20Website/index.html"
When click on reister link to enter multiple data
When enter the "<name>" and "<mobile>" and "<email>" and"<password>" 
And click the sign in button
Then verify alert to confirm

Examples:

|name   |mobile    |email                |password|
|uttam  |7218991947|uttamkawade@gmail.com|123456  |
|mangesh|9614141000|mangesh@gmail.com    |12345878|
|neelam |9049427714|neelam@gmail.com     |qwerty  |
 