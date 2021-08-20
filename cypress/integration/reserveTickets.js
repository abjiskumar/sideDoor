describe('Testing the reserve tickets functionality', () => {
  let testData;
  let username;
  beforeEach('Before Each Block',function(){
    cy.exec('npm cache clear --force');
    cy.clearLocalStorage();
    cy.clearCookies();
     cy.reload(true);
  }) 
  before(function () {
    cy.fixture('testData').then(function (data) {
    testData = data;
    })
  });
  it('Visit staging website and create a new space profile by inputting credentials', () => {
    cy.visit(testData.testBaseUrl_02);
    username = Math.random().toString(36).substr(2, 5);
    cy.url().should('include', 'shows');
    cy.wait(10000);
    cy.contains('Tickets').should('be.visible').click();
    //cy.get('.button').contains('Tickets').click();
    cy.url().should('include', 'shows');
    cy.contains('Reserve Now').should('be.visible').click();
    cy.wait(4000);
    //cy.get('a').contains('Reserve Now');
    cy.contains('Create Account with Email').should('be.visible').click();
    cy.wait(4000);
    //cy.get('a').contains('Create Account with Email').click();
    cy.contains('Save & Continue').should('be.visible');
    cy.get('input[name="email"]').type(username + '@gmail.com');
    cy.get('input[name="confirmEmail"]').type(username + '@gmail.com');
    //cy.get('input[name="confirmEmail"]').type(username + '@gmail.com');
    cy.get('input[name="firstName"]').type(testData.firstName);
    cy.get('input[name="lastName"]').type(testData.lastName);
    cy.get('input[name="password"]').type(testData.password);
    cy.get('input[name="confirmPassword"]').type(testData.password);
    cy.get('input[name="acceptsTos"]').check();
    cy.contains('Save & Continue').should('be.visible').click();
    cy.wait(10000);
    //cy.contains('Reserve Now').should('be.visible');
    cy.get('input[name="name"]').type(testData.firstName + ' ' + testData.lastName);
    cy.get('button[id="sda-shows-order-buy-button"]').click();
    cy.wait(10000);
    cy.get('button[id="sda-confirmation-modal-join-show-chat-button"]').click();
    cy.wait(5000);
    cy.contains('Transfer Tickets').should('be.visible');

   
  });
});