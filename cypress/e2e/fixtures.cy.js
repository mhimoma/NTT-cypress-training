describe('my first test set', ()=>{
    beforeEach('execute before each test', ()=>{
        cy.visit('/')
    })

    it('Should successfuly login', ()=>{
        cy.fixture('profile').then((profile) => {
            cy.Login(profile.username, profile.password)
        })
        cy.contains('Home')
            .should('be.visible')
    })

})