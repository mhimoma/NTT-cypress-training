describe('my first test set', ()=>{
    beforeEach('execute before each test', ()=>{
        cy.visit('/')
    })

    it('Should successfuly login', ()=>{
        cy.intercept('POST', 'http://localhost:3001/login').as('Login')
        cy.intercept('POST', 'http://localhost:3001/graphql', 
            {
                body: {data: {listBankAccount: {}}}
                
            }
        ).as('Graphql')
        cy.Login('Heath93', 's3cret')
        cy.wait('@Login').then((interception)=>{
            expect(interception.response.statusCode).to.eq(200)
            expect(interception.response.body.user.id).to.be.a('string')
        })
        cy.wait('@Graphql').then((interception)=>{
            expect(interception.response.body.data.listBankAccount).to.have.length(0)
        })
        cy.contains('Home')
            .should('be.visible')
    })

    it('Should fail to login', ()=>{
        cy.intercept('POST', 'http://localhost:3001/login').as('Login')
        cy.Login('wrong username', 'wrong password')
        cy.wait('@Login').its('response.statusCode').should('eq', 401)
        cy.contains('Username or password is invalid')
            .should('be.visible')
    })
})