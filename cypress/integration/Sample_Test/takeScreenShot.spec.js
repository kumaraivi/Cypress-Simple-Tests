///<reference types='cypress'/>
describe('Take screenshot - demo.opencart.com', () => {
    beforeEach('Before each test',() => {
        cy.visit('https://demo.opencart.com/')
    })

    it('Take screenshot - demo.opencart.com',()=>{
      cy.screenshot({capture:"fullPage"})
    })
    it.only('Take screenshot of element - demo.opencart.com',()=>{
       cy.contains('Components').screenshot()
      })

    
})