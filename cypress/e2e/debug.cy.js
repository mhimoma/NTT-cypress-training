describe('my first test set', ()=>{
    beforeEach('execute before each test', ()=>{
        cy.visit('/')
    })

    it('Should fail to login', ()=>{
        cy.get('[name=username]')
            .type('wrong username')
        cy.pause()
        cy.get('[name=password]')
            .type('wrong password')
        cy.get('.PrivateSwitchBase-input')
            .check()
            .should('be.checked')
        cy.get('[data-test="signin-submit"]')
            .click()
        cy.contains('Username or password is invalid')
            .should('be.visible')
    })
})