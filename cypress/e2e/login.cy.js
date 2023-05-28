describe('Login', () => {
  const email = Cypress.env('email');
  const password = Cypress.env('password');

  beforeEach(() => {
    cy.visit('/');
    cy.clearLocalStorage();
  });

  it('should log in successfully', () => {
    cy.wait(1000);
    cy.get('button.sc-beqWaB:nth-child(2)').click();
    cy.wait(1000);
    cy.get("input[type='email']:visible").should('exist').type(`${email}`);
    cy.wait(1000);
    cy.get("input[type='password']:visible")
      .should('exist')
      .type(`${password}`);
    cy.wait(1000);
    cy.get('button.sc-gueYoa:nth-child(1)').click();
    cy.wait(5000);
    cy.then(() => {
      cy.then(() => expect(window.localStorage.getItem('user')).to.not.be.null);
      cy.then(
        () => expect(window.localStorage.getItem('token')).to.not.be.null
      );
    });
  });

  it('get alert when login with invalid email and password', () => {
    cy.wait(1000);
    cy.get('button.sc-beqWaB:nth-child(2)').click();
    cy.wait(1000);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type(`unv@stud.noroff.no`);
    cy.wait(1000);
    cy.get("input[type='password']:visible")
      .should('exist')
      .type('incorrectpassword');
    cy.wait(1000);
    cy.get('button.sc-gueYoa:nth-child(1)').click();
    cy.wait(5000);
    cy.get('.modal-body > form:nth-child(2) > p:nth-child(1)').should(
      'have.text',
      'Invalid email or password'
    );
  });
});
