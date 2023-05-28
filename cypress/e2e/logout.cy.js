describe('Logout', () => {
  const email = Cypress.env('email');
  const password = Cypress.env('password');

  beforeEach(() => {
    cy.visit('/');
    cy.clearLocalStorage();
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
  });

  it('logout user', () => {
    cy.wait(1000);
    cy.get('.dropdown-btn').click();
    cy.wait(1000);
    cy.get('a.dropdown-item:nth-child(5)').click();
    cy.wait(5000);
    cy.then(() => {
      cy.then(() => expect(window.localStorage.getItem('user')).to.be.null);
      cy.then(() => expect(window.localStorage.getItem('token')).to.be.null);
    });
  });
});
