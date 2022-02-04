///<reference types='cypress'/>
describe(' Using Xpath',()=>{
   
    it.only('Using xpath -1',()=>{
        cy.visit('/login')
            cy.xpath("//*[@id='username']").type(Cypress.env('username'))
            cy.xpath("//*[@id='password']").type(Cypress.env('password'))
            cy.xpath("//*[@class='radius']").click()
    })
    

})