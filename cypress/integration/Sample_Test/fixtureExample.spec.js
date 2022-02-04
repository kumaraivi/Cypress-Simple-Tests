///<reference types='cypress'/>
describe('Hooks', () => {
    beforeEach('Before all test',() => {
      cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('Validate login',()=>{
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click({force:true})
    })

    it('Validate login using fixtureData',()=>{
        cy.fixture('testData').then((user) =>{
            const strUser=user.username
            const strPwd=user.password
        cy.get('#username').type(strUser)
        cy.get('#password').type(strPwd)
        })
        cy.get('.radius').click({force:true})
    })

  })