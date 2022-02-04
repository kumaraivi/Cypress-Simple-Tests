///<reference types='cypress'/>
describe('First Test Group',()=>{
    beforeEach('Open automationtesting Url',()=>{
        cy.visit('http://demo.automationtesting.in/Register.html')
    })
it('validate automationtesting',()=>{
cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('Avinash')
cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('Kumar')
cy.get('.col-md-8 > .form-control').type('ABC, XYX, 805131')

cy.get('#eid > .form-control').type('abc@gmail.com')
cy.get('input[ng-model="Phone"]').type('9876756712')
cy.get(':nth-child(1) > .ng-pristine').click()
cy.get('#checkbox1').click()
cy.get('#checkbox2').click()
cy.get('#checkbox3').click()
cy.get('#msdd').select('English')
cy.get('#Skills').select('C')
cy.get('#Skills').should('have.value','C')
cy.get('span[role="combobox"]').click()
cy.get('.select2-search__field').type('Ind')
cy.get('.select2-search__field').type('{enter}')
cy.get('span[role="combobox"]').should('have.text','India')
cy.log('India Selected')
})



})