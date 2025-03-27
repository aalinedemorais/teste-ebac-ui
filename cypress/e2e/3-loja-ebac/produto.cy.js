/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
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
       // cy.get('.product-block')
        //.contains('Marco')
        //.click()        
        //cy.get('.posted_in').should('contain', 'Marco')
        
    });
});