
Feature: Sample

    Scenario Outline: Verify the Page title

        Given user Open the facebook page

        When user enters "<email address>" email address 

        And user enters "<password>" password 

        And click on Login

        Then user should log in successfully

    Examples:
        | emailaddress| password |
        | singlaruchi17@yahoo.com | fortunately | 
        #| singlaruchi17@yahoo.com | fortunately | 






