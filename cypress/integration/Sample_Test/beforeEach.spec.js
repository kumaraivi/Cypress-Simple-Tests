///<reference types='cypress'/>
describe('Hooks', () => {
    before('Before all test',() => {
      cy.log('runs once before all tests in the block')
    })
  
    beforeEach('Before each test',() => {
        cy.log('runs before each test in the block')
    })

    it('Visit google site',()=>{
        cy.visit('https://www.google.co.in')
    })
    it.skip('Visit google site',()=>{
        cy.visit('https://www.google.co.in')
    })

    it('Visit google site',()=>{
        cy.visit('https://www.google.co.in')
    })
  
    afterEach('After each',() => {
        cy.log('runs after each test in the block')
    })
  
    after('After all tests',() => {
        cy.log('runs once after all tests in the block')
    })
  })
  