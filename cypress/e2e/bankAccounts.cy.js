describe('Bank Accounts Page', ()=>{
    beforeEach('Login', ()=>{
        cy.visit('/')
        cy.fixture('profile').then((profile) => {
            cy.Login(profile.username, profile.password)
        })
    })
    
    it('Should create multiple bank accounts', ()=>{
        cy.getBySel('sidenav-bankaccounts')
            .click()
        cy.fixture('bankAccounts').then((accounts)=>{
            for(const account of accounts ){
                cy.getBySel('bankaccount-new')
                    .click({force: true})
                cy.get('[name=bankName]')
                    .type(account.bankName)
                cy.get('[name=routingNumber]')
                    .type(account.routingNumber)
                cy.get('[name=accountNumber]')
                    .type(account.accountNumber)
                cy.getBySel('bankaccount-submit')
                    .click()
            }
            cy.get('[data-test*= bankaccount-list-item')
                .should('not.be.empty')
        })
    
    })

})