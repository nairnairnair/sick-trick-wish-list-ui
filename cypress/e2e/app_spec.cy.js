beforeEach(() => {
  cy.visit('http://localhost:3000');
});

describe('Feedback Loop login flows', () => {
  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });

  it('should see the controlled form when visiting the page', () => {
    cy.get('h1').should('include.text', 'Sick Trick Wish List')
    cy.get('select').should('exist')
    cy.get('input').should('exist')
    cy.get('button').should('exist')
  })

  it('should be able to type data into the form inputs', () => {
    cy.get('input[className=nameInput]').should('exist')
    .type('ollie')
    .should('have.value', 'ollie')
    cy.get('input[className=tutorialInput]').should('exist')
    .type('video link')
    .should('have.value', 'video link')
  })

  it('should be able to add a new trick to the DOM', () => {
    cy.get('select').should('exist')
    cy.get('input').should('exist')
    cy.get('select').should('exist')
    cy.get('input').should('exist')
    cy.get('button').click()
  })
})