///<reference types='cypress'/>
describe('Hooks', () => {
    beforeEach('Before each test',() => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('Validate login using custom commands',()=>{
        
      cy.login('tomsmith','SuperSecretPassword!')  
    })

    it('Validate login using custom commands and dat from fixture',()=>{
        
        cy.fixture('testData').then((user) =>{
            const strUser=user.username
            const strPwd=user.password
        cy.login(strUser,strPwd)  
        })
      })
})