describe('Bank Accounts Page', ()=>{
    beforeEach('Login', ()=>{
        cy.visit('/')
        cy.fixture('profile').then((profile) => {
            cy.Login(profile.username, profile.password)
        })
    })
    
    it('Should create a bank account', ()=>{
        cy.intercept('POST', 'http://localhost:3001/graphql', 
            {
                body: {data: {listBankAccount: [
                    {
                        "id": "pgl34Jtnfhf",
                        "uuid": "0939b3fe-02da-46f4-a3a6-f06f0fc49f75",
                        "userId": "uBmeaz5pX",
                        "bankName": "NTT cypress training Bank",
                        "accountNumber": "7774132232",
                        "routingNumber": "996645387",
                        "isDeleted": false,
                        "createdAt": "2025-03-28T21:55:07.857Z",
                        "modifiedAt": "2025-03-07T20:50:34.541Z"
                      },
                      {
                        "id": "pgl34Jtnfhs",
                        "uuid": "0939b3fe-02da-46f4-a3a6-f06f0fc49f75",
                        "userId": "uBmeaz5pX",
                        "bankName": "another Bank",
                        "accountNumber": "7774132232",
                        "routingNumber": "996645387",
                        "isDeleted": true,
                        "createdAt": "2025-03-28T21:55:07.857Z",
                        "modifiedAt": "2025-03-07T20:50:34.541Z"
                      }

                ]}}
                
            }
        ).as('graphql')
        cy.getBySel('sidenav-bankaccounts')
            .click({force:true})
        cy.fixture('bankAccounts').then((accounts) => {
            const account = accounts[0];
            // cy.getBySel('bankaccount-new')
            //     .click({force: true})
            cy.getBySel('user-onboarding-next')
                .click()
            cy.get('[name=bankName]')
                .type(account.bankName)
            cy.get('[name=routingNumber]')
                .type(account.routingNumber)
            cy.get('[name=accountNumber]')
                .type(account.accountNumber)
            cy.getBySel('bankaccount-submit')
                .click()
            cy.getBySel('user-onboarding-next')
                .click()
            cy.get('[data-test*=bankaccount-list-item]')
                .should('not.be.empty')
        })
    
    })

})