/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        //cy.visit('produtos')
        produtosPage.VisitarURL()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
        // cy.get('.product-block')
        // .first()
        // .click()
        cy.get('.summary > .yith-wcwl-add-to-wishlist > .yith-wcwl-add-button > .add_to_wishlist > :nth-child(2)').should('exist')
        // cy.get('.product-block')
        // .last()
        // .click()
        // cy.get('#tab-title-description > a').should('contain', 'Descrição')
        // cy.get('.block-inner')
        // .eq(2)
        // .click()
        // cy.get('#tab-title-additional_information > a').should('contain', 'Informação adicional')
        // deve conter o nome todo do item a ser verificado, pois do contrário vai quebrar
        // cy.get('.product-block')
        // .contains('Oslo Trek Hoodie')
        // .click()
        // cy.get('.product_title').should('contain', 'Oslo Trek Hoodie')

    });

    it('Deve buscar um produto com sucesso', () => {
        // usando variável
        let produto = 'Aether Gym Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
        // produtosPage.buscarProduto('Aether Gym Pant')
        // cy.get('.product_title').should('contain', 'Aether Gym Pant')
    });

    it('Deve visitar a página do produto', () => {
        // usado com hífen normalmente
        // produtosPage.visitarProduto('Arcadio-Gym-Short')
        // para usar com espaço tem que ter urlFormatada no produtos.page.js
        produtosPage.visitarProduto('Arcadio Gym Short')
        cy.get('.product_title').should('contain', 'Arcadio Gym Short')
    });

    it('Deve adicionar produto ao carrinho', () => {
        produtosPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
        // forma de fazer sem dados parametrizáveis
        // produtosPage.addProdutoCarrinho()
        let qtd = 7
        produtosPage.addProdutoCarrinho('XL', 'Green', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho,
                dados [1].cor,
                dados[1].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        })        
    });

});