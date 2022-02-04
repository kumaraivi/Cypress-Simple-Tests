///<reference types='cypress'/>
describe('Read/Write data from file',()=>{
    it('Write into .txt file',()=>{
        cy.writeFile('sample.txt','Hello World')
    })
    it('Read from .txt file',()=>{
        cy.readFile('sample.txt').should('contain','Hello World')
    })

    it('Read from json file',()=>{
        cy.readFile('userData.json').its('username').should('eq','tomsmith')
        const pwd=cy.readFile('userData.json').its('username')
        cy.log(pwd)
       //pwd.should('contain', 'tom')
    })

    it('Write into json file',()=>{
        cy.writeFile('empData.json',{name:'Test',email:'abc@gmail.com'})
    })

    it('Browser file content type',()=>{
        cy.visit('https://demo.seleniumeasy.com/table-sort-search-demo.html')
        cy.document().its('contentType').should('eq','text/html')
        cy.document().should('have.property','charset').and('eq','UTF-8')
    })
    it.only('File uploading',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile('sample.txt')
        cy.get('#file-submit').click()
    })
    

})