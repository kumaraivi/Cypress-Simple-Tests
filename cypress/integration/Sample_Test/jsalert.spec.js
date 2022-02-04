///<reference types='cypress'/>
describe('First Test Group',()=>{
    beforeEach('Open js alert Url',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
it('Validate js alert',()=>{
cy.contains('Click for JS Alert').click()
cy.on('windows:alert',(str)=>{
    epext(str).to.bexpect('I am a JS Alert');
})
cy.contains('Click for JS Confirm').click()
cy.on('windows:alert',(str)=>{
    expect(str).to.equal('I am a JS Confirm');
    return false
})
cy.get('#result').should('contain','You clicked: Ok')
})



})