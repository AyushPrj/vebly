describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://vebly.netlify.app/')
      cy.wait(1000)
      // Then simulate the clicks
      cy.get('#tablet-view').click();
      cy.get('#canvas').should('have.class', 'tablet');
      cy.get('#mobile-view').click();
      cy.get('#canvas').should('have.class', 'mobile');
    })
  })