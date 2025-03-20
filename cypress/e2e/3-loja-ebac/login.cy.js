/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })
    afterEach(() => {
        cy.screenshot()
    });
it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('amora@uorak.com')
    cy.get('#password').type('teste123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, amora (não é amora? Sair)')
})
it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('teste@uorak.com')
    cy.get('#password').type('teste123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('exist')
})
it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('amora@uorak.com')
    cy.get('#password').type('teste')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail')
})
})