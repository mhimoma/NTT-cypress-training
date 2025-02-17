describe('Network Requests', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/network-requests')
    })
  
    it('Intercepts and stubs a GET request', () => {
      cy.intercept('GET', '**/comments/*', { body: { postId: 1, id: 1, name: "Cypress", email: "test@cypress.io", body: "Intercepted response" } }).as('getComment')
      
      cy.get('.network-btn').click()
      cy.wait('@getComment').its('response.statusCode').should('eq', 200)
    })
  })
  