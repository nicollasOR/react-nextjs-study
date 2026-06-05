// validar se existe cardápio na tela

describe("Tela Home", () =>{
    //definindo o cenário de testes
    it("Deve carregar a tela home e mostrar produtos", () =>{
        //abrir a tela do navegador
        cy.visit("http://localhost:3001/")
        cy.contains("Cardápio").should("be.visible");
    })
})
