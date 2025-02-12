describe('Navigate feature', ()=>{
    beforeEach('execute before each test', ()=>{
        cy.visit('/')
    })

    it('Should navigate to bank accounts', ()=>{
        cy.intercept('POST', 'http://localhost:3001/graphql').as('getAccountsList')
        cy.Login('Heath93', 's3cret')
        cy.getBySel('sidenav-bankaccounts')
            .click()
        cy.wait('@getAccountsList').then((interception)=>{
            console.log(interception)
        })
        cy.url()
            .should('include', '/bankaccounts')
    })

    it('Should navigate to Notifictaion', ()=>{
        
        cy.Login('Heath93', 's3cret')
        cy.getBySel('sidenav-notifications')
            .click()
        
        cy.url()
            .should('include', '/notifications')
    })

    it.only('Should navigate to my account', ()=>{
        cy.Login('Heath93', 's3cret')
        cy.getBySel('sidenav-user-settings')
            .click()
        
        cy.url()
            .should('include', '/user/settings')
    })

    

    
})