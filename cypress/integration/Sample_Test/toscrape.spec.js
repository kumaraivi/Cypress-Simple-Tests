///<reference types='cypress'/>
describe('First Test Group',()=>{
    beforeEach('Open books to scrape Url',()=>{
        cy.visit('http://books.toscrape.com/index.html')
    })
it('Validate books toScrape',()=>{
cy.contains('Travel').click()
cy.url().should('include','travel')
console.log('Epexted Result')
cy.get('h1').should('be.visible')
cy.get('.image_container').its('length').should('eq',11)
})



})