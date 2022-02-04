///<reference types='cypress'/>
describe('First Test Group',()=>{
    beforeEach('Open ngx admin Url',()=>{
        cy.visit('http://localhost:4200/pages')
    })
it('Open Form',()=>{
    cy.get('body > ngx-app > ngx-pages > ngx-one-column-layout > nb-layout > div > div > nb-layout-header > nav > ngx-header > div:nth-child(1) > div > a.sidebar-toggle > nb-icon').click()
cy.get('body > ngx-app > ngx-pages > ngx-one-column-layout > nb-layout > div > div > div > nb-sidebar > div > div > nb-menu > ul > li.menu-item.ng-tns-c7-4.ng-star-inserted > a > span').click()
cy.contains('Form Layouts').click()
cy.contains('nb-card','Basic form')
.find('nb-checkbox')
.click()
.find('.custom-checkbox')
.invoke('attr','class')
.should('contain','checked')

cy.contains('nb-card','Using the Grid')
.find('[type="radio"]').then(radioBtns=>{
    cy.wrap(radioBtns)
    .first()
    .check({force:true})
    .should('be.checked')
    cy.get(':nth-child(2) > label > .text').click({ force: true })
   
})
})
it('Table Validation',()=>{
    cy.contains('Tables & Data').click()
    cy.contains('Smart Table').click()
    cy.get('[data-name="menu-2"]').click()
    cy.get('tbody').contains('tr','John').then(tableRow =>{
        cy.wrap(tableRow).find('.nb-edit').click()
        cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(30)
        cy.wrap(tableRow).find('.nb-checkmark').click()
        cy.wrap(tableRow).find('td').eq(6).should('contain','30')
        cy.get(':nth-child(7) > :nth-child(7) > ng2-smart-table-cell > table-cell-view-mode.ng-star-inserted > [ng-reflect-ng-switch="number"] > .ng-star-inserted').should('contain','43')
    })
})
it.only('Table Ro Addition Validation',()=>{
    cy.contains('Tables & Data').click()
    cy.contains('Smart Table').click()
    cy.get('[data-name="menu-2"]').click()
    cy.get('thead').find('.nb-plus').click()
    cy.get('thead').find('tr').eq(2).then(tableRow =>{
        cy.wrap(tableRow).find('[placeholder="First Name"]').type('Test')
        cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Training')
        cy.wrap(tableRow).find('.nb-checkmark').click()
    })
    cy.get('tbody tr').first('td').then(tableCol =>{
        cy.wrap(tableCol).eq(3).should('contain','Test')
        cy.wrap(tableCol).eq(4).should('contain','Training')
    })
})

})