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

    });

    it('Deve adicionar produto ao carrinho', () => {

    });

});