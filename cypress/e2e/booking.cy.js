describe('Book venue', () => {
  const email = Cypress.env('email');
  const password = Cypress.env('password');

  beforeEach(() => {
    cy.visit('/');
  });

  it('should show venue by id and ask for auth when try book it', () => {
    cy.wait(1000);
    cy.get('div.col-lg-4:nth-child(1)').click();
    cy.wait(1000);
    cy.url()
      .should('match', /\/venue\/[a-zA-Z0-9-]+$/)
      .then((url) => {
        const id = url.split('/').pop();
        cy.log(`The venue ID is: ${id}`);
      });
    cy.wait(1000);
    cy.get('a.sc-beqWaB').click();
    cy.wait(1000);
    cy.get('.react-calendar__viewContainer').within(() => {
      cy.get('.react-calendar__tile')
        .not('[disabled]')
        .each((dateElement) => {
          cy.wrap(dateElement).click();
        });
    });
    cy.wait(1000);
    cy.get('.booking-btn').click();
    cy.wait(1000);
    cy.get('button.sc-beqWaB:nth-child(1)').click();
    cy.wait(1000);
    cy.get('div.fade:nth-child(4)').should('be.visible');
  });

  it('should show venue by id and book it when user login', () => {
    cy.wait(1000);
    cy.get('div.col-lg-4:nth-child(1)').click();
    cy.wait(1000);
    cy.url()
      .should('match', /\/venue\/[a-zA-Z0-9-]+$/)
      .then((url) => {
        const id = url.split('/').pop();
        cy.log(`The venue ID is: ${id}`);
      });
    cy.wait(1000);
    cy.get('a.sc-beqWaB').click();
    cy.wait(1000);
    cy.get('.react-calendar__viewContainer').within(() => {
      cy.get('.react-calendar__tile')
        .not('[disabled]')
        .each((dateElement) => {
          cy.wrap(dateElement).click();
        });
    });
    cy.wait(1000);
    cy.get('.booking-btn').click();
    cy.wait(1000);
    cy.get('button.sc-beqWaB:nth-child(1)').click();
    cy.wait(1000);
    cy.get('div.fade:nth-child(4)').should('be.visible');
    cy.wait(1000);
    cy.get("input[type='email']:visible").should('exist').type(`${email}`);
    cy.wait(1000);
    cy.get("input[type='password']:visible")
      .should('exist')
      .type(`${password}`);
    cy.wait(1000);
    cy.get('.d-grid > button:nth-child(1)').click();
    cy.wait(1000);
    cy.get('button.sc-beqWaB:nth-child(1)').click();
    cy.wait(1000);
    cy.url().should('include', '/profile/');
    cy.url().should('match', /\/profile\/\w+/);
  });
});
