# sideDoor

Test Scenarios tested

Integration Test 1: Create a new Space profile
Requirements:
Host this project on Github, Gitlab, or any other project management solution (as long as you can link it to me)

This integration test should be built using Cypress

Use our staging site - https://staging.sidedooraccess.com

Start the test by navigating to the Join menu -> Host

The test ends at successfully submitting the “Save & Continue” form CTA at https://staging.sidedooraccess.com/dashboard/profile/new


Integration Test 2: Reserve a free ticket
Requirements:
Host this project on Github, Gitlab, or any other project management solution (as long as you can link it to me)

This integration test should be built using Cypress

Use our staging site and navigate to this show page: https://staging.sidedooraccess.com/shows/mrgoqho3RIvdDFxjBj3O

Start the test by clicking on the “Tickets” button

The test ends at successfully clicking the “Join Show Chat” CTA at the end of the reservation flow


Prerequisites to run the tests

1. Install Node
2. Install Cypress

Steps to run the tests

1. Clear Cypress browser history and cache before running the tests cases as it interferes with logged in user scenario.
2. Run npx cypress open from the terminal at the project folder location
3. The cypress terminal will open where the test cases will be visible.


Issues faced

1. The test case to create a profile could not be completed as the application threw an error, the screenshot of which has been attached.

2. As it was not known which API to wait for before proceeding to look for an element or click on it, timed wait statements had to be added.
