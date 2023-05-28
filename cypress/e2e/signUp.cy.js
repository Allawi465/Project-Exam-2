describe('Sign up', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.clearLocalStorage();
  });

  describe('Sign Up Tests', () => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const uniqueEmail = `cyberSignUp${day}${month}@stud.noroff.no`;
    const password = '12345678';

    it('Sign up with valid email, name, password', () => {
      cy.wait(1000);
      cy.get('button.sc-beqWaB:nth-child(1)').click({ force: true });
      cy.wait(1000);
      cy.get("input[type='text']:visible").should('exist').type(`cyberSignUp`);
      cy.wait(1000);
      cy.get("input[type='email']:visible")
        .should('exist')
        .type(`${uniqueEmail}`);
      cy.wait(1000);
      cy.get("input[type='password']:visible")
        .should('exist')
        .type(`${password}`);
      cy.wait(1000);
      cy.get('button.sc-gueYoa:nth-child(1)').click();
      cy.wait(1000);
      cy.get("input[type='email']:visible")
        .should('exist')
        .type(`${uniqueEmail}`);
      cy.wait(1000);
      cy.get("input[type='password']:visible")
        .should('exist')
        .type(`${password}`);
      cy.wait(1000);
      cy.get('button.sc-gueYoa:nth-child(1)').click();
      cy.wait(5000);
      cy.then(() => {
        cy.then(
          () => expect(window.localStorage.getItem('user')).to.not.be.null
        );
        cy.then(
          () => expect(window.localStorage.getItem('token')).to.not.be.null
        );
      });
    });

    it('get alert when sign up with already exists email', () => {
      cy.wait(1000);
      cy.get('button.sc-beqWaB:nth-child(1)').click({ force: true });
      cy.wait(1000);
      cy.get("input[type='text']:visible").should('exist').clear();
      cy.wait(1000);
      cy.get("input[type='text']:visible").should('exist').type(`cyberSignUp`);
      cy.wait(1000);
      cy.get("input[type='email']:visible").should('exist').clear();
      cy.wait(1000);
      cy.get("input[type='email']:visible")
        .should('exist')
        .type(`${uniqueEmail}`);
      cy.wait(1000);
      cy.get("input[type='password']:visible")
        .should('exist')
        .type(`${password}`);
      cy.wait(1000);
      cy.get('button.sc-gueYoa:nth-child(1)').click();
      cy.wait(5000);
      cy.get('.modal-body > form:nth-child(2) > p:nth-child(1)').should(
        'have.text',
        'Profile already exists'
      );
    });
  });
});
