describe('Make Appointment. :Scenario 1', () => {
beforeEach(() => {
  // Visit the base URL before each test. We can just use empty string because the base URL is already defined in cypress.config.js file. :)
      cy.visit('');
    });

  it('make an appointment', () => {
    // Click on the "Make Appointment" button.
    cy.get('#btn-make-appointment').click();

    // Type in the DEMO ACCOUNT username and password fields.
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');

    // Click on the "Login" button.
    cy.get('#btn-login').click();

    // Setting the following values as mentioned in homework:

    // Setting facility to seoul and validate it.
    cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
    cy.get('#combo_facility').should('have.value', 'Seoul CURA Healthcare Center');

    // Checking and validating the Apply for hospital readmission. There is typo in the id.
    cy.get('#chk_hospotal_readmission').check();
    cy.get('#chk_hospotal_readmission').should('be.checked');

    // Selecting the Medicaid. And validate it.
    cy.get('#radio_program_medicaid').check();
    cy.get('#radio_program_medicaid').should('be.checked');

    // Setting the date to 30/04/2026 using the widget. After setting it, validate that the date is set correctly.
    cy.get('#txt_visit_date').click();
    //.day:not(.old):not(.new) - this pseudo selector ignores the new and old month days.
    cy.get('.datepicker-days').find('.day:not(.old):not(.new)').contains('30').click();
    cy.get('#txt_visit_date').should('have.value', '30/04/2026');
    
    // Setting the comment and validating it.
    cy.get('#txt_comment').type('CURA Healthcare Service.');
    cy.get('#txt_comment').should('have.value', 'CURA Healthcare Service.');
    // Click on the "Book Appointment" button.
    cy.get('#btn-book-appointment').click();
  })
})