describe('First test', {"retries":{"runMode":2,"openMode":2}}, () => {
it('Launch URL', () => {
    cy.visit('https://example.cypress.io/todo')
    cy.get(':nth-child(1) > .view > label').contains('Pay')
    cy.get(':nth-child(1) > .view > .toggle').click({ position: 'center' })
    const button =cy.get('.footer > .todo-button')
    button.click({ position: 'center' })
})


})