describe('my first test set', ()=>{
    beforeEach('execute before each test', ()=>{
        cy.visit('/')
    })

    it('Should successfuly login', ()=>{
        cy.get('[name=username]')
            .type('Heath93')
        cy.get('[name=password]')
            .type('s3cret')
        cy.get('.PrivateSwitchBase-input')
            .check()
            .should('be.checked')
        cy.get('[data-test="signin-submit"]')
            .click()
        cy.contains('Home')
            .should('be.visible')
    })

    it('Should fail to login', ()=>{
        cy.get('[name=username]')
            .type('wrong username')
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