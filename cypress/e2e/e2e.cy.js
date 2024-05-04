describe('template spec', () => {
  it('passes', () => {
    // cy.visit('http://127.0.0.1:5500/')
    cy.visit('https://vebly.netlify.app/')
    cy.get('#section_controls2').click();
    cy.get('.delete-btn').each(($el, index, $list) => {
      cy.wrap($el).click({force: true});
    });
    cy.get('#section_controls1').click();
    cy.get('#section_addition').click({force: true});
    cy.should('exist')
  })
})