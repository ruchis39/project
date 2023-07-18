
Feature: Sample

    Scenario Outline: Verify the Page title

        Given user open the ultimatix page

        When user enters "<username>" username

        And user clicks on Proceed button

        And user clicks on Auth Code button

        And user clicks on Login button

        Then user should log in successfully

    Examples:
        | username| 
        | 1012303 | 
        #| singlaruchi17@yahoo.com | fortunately | 






