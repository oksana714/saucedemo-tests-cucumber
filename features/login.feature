Feature: Login validation (Saucedemo)
    As a user
    I want to see a helpful error if I try to login with empty fields

    Scenario: Empty login shows required message
        Given User is located on the main page of saucedemo website
        When User click Login button
        Then User should see Epic sadface: Username is required error message
