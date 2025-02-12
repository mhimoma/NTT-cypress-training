describe('my first test set', ()=>{
    beforeEach('execute before each test', ()=>{
        cy.visit('/')
    })

    it('Should successfuly login', ()=>{
        cy.Login('Heath93', 's3cret')
        cy.contains('Home')
            .should('be.visible')
    })

    it('Should fail to login', ()=>{
        cy.Login('wrong username', 'wrong password')
        cy.contains('Username or password is invalid')
            .should('be.visible')
    })
})