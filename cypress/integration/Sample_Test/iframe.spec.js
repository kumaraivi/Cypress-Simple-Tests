///<reference types='cypress'/>
describe('First Test Group',()=>{
    beforeEach('Open books to scrape Url',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
    })
it('Validate multi window',()=>{
cy.get('#mce_0_ifr').within(function ($myframe){
    const frame=$myframe.contents().find('#tinymce')
    cy.wrap(frame, {timeout:5000}).clear()
    .type('Hello Avinash How are you')
})
})



})