Feature: Login

  Background:
    Given I am on the login page

  Scenario: Valid user logs in
    When I login with "standard_user" and "secret_sauce"
    Then I should see the products page

  Scenario: Locked out user sees an error
    When I login with "locked_out_user" and "secret_sauce"
    Then I should see the error "locked out"

  Scenario: Wrong password shows an error
    When I login with "standard_user" and "wrong_pass"
    Then I should see the error "do not match"