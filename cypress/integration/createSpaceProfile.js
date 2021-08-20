describe('Testing Creation of New Space Profile', () => {
    let testData;
  let username;
  before(function () {
      cy.fixture('testData').then(function (data) {
      testData = data;
    })
  });
  it('Visit staging website and create a new space profile by inputting credentials', () => {
    cy.visit(testData.testBaseUrl_01);
    cy.contains('Join').should('be.visible');
    cy.url().should('include', 'home');
    cy.get('a').contains('Join').click();
    cy.get('a').contains('Host').click();
    cy.url().should('include', 'signup/host/space');
    cy.get('a').contains('Create Space Profile').click();
    cy.get('a').contains('Create Account with Email').click();
    
   
  });
});