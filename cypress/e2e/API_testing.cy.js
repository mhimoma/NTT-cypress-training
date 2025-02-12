import {faker} from '@faker-js/faker'

const apiUrl= `${Cypress.env('apiUrl')}`
const bankAccountID= "pgl34JtnfhX"
describe('API testing', () =>{
    beforeEach('Login API', () =>{
        cy.request('POST', `${apiUrl}/login`, {
            username: 'Heath93',
            password: 's3cret'
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
    })

    it('Should create bank accounts', ()=>{
        cy.request('POST', `${apiUrl}/bankAccounts`, {
            bankName: `${faker.company.name()} bank`,
            accountNumber: `${faker.finance.accountNumber(10)}`,
            routingNumber:  `${faker.finance.routingNumber(9)}`
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.account.id).to.be.a('string')
        })
    })

    it('Should get the list of bank accounts', ()=>{
        cy.request('GET', `${apiUrl}/bankAccounts`).then((response)=>{
            expect(response.status).to.eq(200)
            
        })
    })

    it('Should delete a bank account', ()=>{
        cy.request('DELETE', `${apiUrl}/bankAccounts/${bankAccountID}`).then((response)=>{
            expect(response.status).to.eq(200)
            
        })
    })
})