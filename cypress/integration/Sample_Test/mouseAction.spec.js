///<reference types='cypress'/>
describe('First Test Group',()=>{
  
it('Validate mouse actions',()=>{
    cy.visit('//https://demo.opencart.com/')
cy.get('.form-control').type('phone')
cy.get('.input-group-btn').trigger('click')
})

it('mouse over',()=>{
    cy.visit('//https://demo.opencart.com/')
    cy.get(':nth-child(3) > .dropdown-toggle')
    .invoke('show').should('be.visible').trigger('mouseover')
    cy.get('ul.nav li:nth-child(3) > div')
    .invoke('show').should('be.visible')
    cy.get('ul.nav li:nth-child(3) > div ul li:nth-child(2)').click()
    cy.get(':nth-child(3) > .dropdown-toggle').trigger('click')
    cy.contains('Monitors').click()
})
it('right click',()=>{
    cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    cy.contains('right click me').rightclick()
    cy.get('.context-menu-icon-copy').click()
    cy.on('window:alert', (str)=>{
        expect(str).to.be.equals('clicked: copy')
    })
})
it.only('double click',()=>{
    cy.visit('http://testautomationpractice.blogspot.com/')
    cy.get('#field1').clear().type('Hello')
    cy.contains('Copy Text').dblclick()
    //cy.get('field2').should('contain','Hello')
})

})