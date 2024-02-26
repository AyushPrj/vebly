describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/editor')
    cy.wait(1000)
    cy.get('#gjs').should('be.visible')
    cy.get('.gjs-devices').should('have.value', 'desktop') // check by value
    cy.get('.gjs-devices').select('tablet')
    cy.get('.gjs-frame-wrapper').should('have.css', 'width', '768px')
    cy.get('.gjs-devices').select('mobilePortrait')
    cy.get('.gjs-frame-wrapper').should('have.css', 'width', '320px')
  })
})