// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --


// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('Login', (username, password) =>{
    cy.get('[name=username]')
            .type(username)
        cy.get('[name=password]')
            .type(password)
        cy.get('.PrivateSwitchBase-input')
            .check()
            .should('be.checked')
        cy.get('[data-test="signin-submit"]')
            .click()
})

Cypress.Commands.add('getBySel', (selector) =>{
   return cy.get(`[data-test=${selector}]`)
})