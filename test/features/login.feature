
Feature: Template Test

    As a student of UMUC
    I want to login

    Scenario: Login
        Given a user that go to UMUC portal
        When the user logs in
        Then the student should see the dashboard
        