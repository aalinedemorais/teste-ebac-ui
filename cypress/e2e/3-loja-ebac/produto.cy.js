/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            .first()
            .click()
        cy.get('.summary > .yith-wcwl-add-to-wishlist > .yith-wcwl-add-button > .add_to_wishlist > :nth-child(2)').should('exist')
        cy.get('.product-block')
            .last()
            .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        cy.get('.block-inner')
            .eq(2)
            .click()
        cy.get('#tab-title-additional_information > a').should('contain', 'Informação adicional')
        // deve conter o nome todo do item a ser verificado, pois do contrário vai quebrarS
        cy.get('.product-block')
            .contains('Oslo Trek Hoodie')
            .click()
        cy.get('.product_title').should('contain', 'Oslo Trek Hoodie')

    
    });

    it('Deve buscar um produto com sucesso', () => {

    });

    it('Deve visitar a página do produto', () => {

    });

    it('Deve adicionar produto ao carrinho', () => {

    });

});