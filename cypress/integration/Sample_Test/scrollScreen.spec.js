///<reference types='cypress'/>
describe('scroll down screen - demo.opencart.com', () => {
    beforeEach('Before each test',() => {
        cy.visit('https://demo.opencart.com/')
    })

    it('scroll down screen - demo.opencart.com',()=>{
        cy.contains('Site Map').scrollIntoView().should('be.visible')
        cy.scrollTo(0, 500)
    })


    
})