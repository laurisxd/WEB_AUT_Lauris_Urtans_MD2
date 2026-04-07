describe('Appointment History Empty :Scenario 2', () => {
beforeEach(() => {
  // Visit the base URL before each test. We can just use empty string because the base URL is already defined in cypress.config.js file. :)
      cy.visit('');
    });

  it('Appointment list empty', () => {

    // Click on the "Make Appointment" button.
    cy.get('#btn-make-appointment').click();

    // Type in the DEMO ACCOUNT username and password fields.
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');

    // Click on the "Login" button.
    cy.get('#btn-login').click();

    // Click on the "Menu" button and validate it..
    cy.get('#menu-toggle').click();
    cy.get('#menu-toggle').should('be.visible');

    // Click on the "History" tab.
    cy.get('#sidebar-wrapper').find('a').contains('History').click();

    // Validate that there is no appointment in the list.
    cy.get('.container').find('p').contains('No appointment.').should('be.visible');

    
  })
})