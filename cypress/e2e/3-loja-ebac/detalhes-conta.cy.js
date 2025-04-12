/// <reference types="cypress" />

describe('Funcionalidade: Detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account/')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        })
        //seria usado dessa forma e nesse ponto sem o fixture
        // cy.login('amora@uorak.com', 'teste123')

    });

    it('Deve completar detalhes da conta com sucesso', () => {
        //cy.get('elemento').clear().type('texto')
        cy.detalhesConta('Fulano', 'Tal', 'fulano.tal')
       cy.get('.woocommerce-message').should('exist')
    });

});