describe('Assertions', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io')
    })
  
    it('should make an assertion about an element', () => {
      cy.get('.navbar').should('be.visible')
    })
  
    it('should assert that a URL contains a substring', () => {
      cy.contains('type').click()
      cy.url().should('include', '/commands/actions')
    })
  })
  