///<reference types='cypress'/>
describe('First Test Group',()=>{
    beforeEach('Open books to scrape Url',()=>{
        cy.visit('https://stqatools.com/demo/Windows.php')
    })
it('Validate multi window',()=>{
cy.contains('new Window').invoke('removeAttr','target')
.click()
cy.url().should('contain','Windows')
//cy.contains('Click to open new Tab').invoke('removeAttr','target').click()
})



})