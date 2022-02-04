///<reference types='cypress'/>
describe('First Test Group',()=>{
  
    it('720p Resolution',()=>{
        //we can test either by passing resolution or real device name
        cy.viewport(1280,720)
        cy.visit('https://www.example.com/')
    
    })

    it('1080p Resolution',()=>{
        //we can test either by passing resolution or real device name
        cy.wait(200)
        cy.viewport(1980,1080)
        cy.visit('https://www.example.com/')
    
    })
    it('ipad-2 Resolution',()=>{
        //we can test either by passing resolution or real device name
        cy.wait(200)
        cy.viewport('ipad-2')
        cy.visit('https://www.example.com/')
    
    })

    it('iphone-4 Resolution',()=>{
        //we can test either by passing resolution or real device name
        cy.wait(200)
        cy.viewport('iphone-4','landscape')
        cy.visit('https://www.example.com/')
    
    })
    it('iphone-4 Resolution',()=>{
        //we can test either by passing resolution or real device name
        cy.wait(200)
        cy.viewport('iphone-4','portrait')
        cy.visit('https://www.example.com/')
    
    })

    it('samsung-s10 Resolution',()=>{
        //we can test either by passing resolution or real device name
        cy.wait(200)
        cy.viewport('samsung-s10','portrait')
        cy.visit('https://www.example.com/')
    
    })
    it('samsung-s10 Resolution',()=>{
        //we can test either by passing resolution or real device name
        cy.wait(200)
        cy.viewport('samsung-s10','landscape')
        cy.visit('https://www.example.com/')
    
    })
})