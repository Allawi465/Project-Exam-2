describe('Create venue', () => {
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

  it('should create venue when login', () => {
    cy.wait(1000);
    cy.get('.hero-text-button').find('a').click({ force: true });
    cy.wait(1000);
    cy.get('.create-form').within(() => {
      cy.wait(1000);
      cy.get('input[name="name"]').type('Sample Venue', { force: true });
      cy.wait(1000);
      cy.get('textarea[name="description"]').type(
        'This is a sample venue description.',
        { force: true }
      );
      cy.wait(1000);
      cy.get('input[name="media"]').type(
        'https://user-images.githubusercontent.com/91701833/193477906-52a1e040-5e3f-4b06-82c9-767a30b8d227.jpg'
      );
      cy.wait(1000);
      cy.get('input[name="country"]').type('Norway');
      cy.wait(1000);
      cy.get('input[name="address"]').type('Korsgata 30');
      cy.wait(1000);
      cy.get('input[name="city"]').type('Oslo');
      cy.wait(1000);
      cy.get('input[name="zip"]').type('0418');
      cy.wait(1000);
      cy.get('input[name="price"]').type('100');
      cy.wait(1000);
      cy.get('input[name="maxGuests"]').type('2');
      cy.wait(1000);
      cy.get('input[name="rating"]').type('5');
      cy.wait(1000);
      cy.get('input[name="wifi"]').check();
      cy.get('input[name="parking"]').uncheck();
      cy.get('input[name="breakfast"]').check();
      cy.get('input[name="pets"]').uncheck();
      cy.wait(1000);
      cy.get('.sc-beqWaB').click();
      cy.wait(1000);
      cy.url()
        .should('match', /\/venue\/[a-zA-Z0-9-]+$/)
        .then((url) => {
          const id = url.split('/').pop();
          cy.log(`The venue ID is: ${id}`);
        });
    });
  });
});
