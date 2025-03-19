/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    it('Deve fazer login com suscesso', () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('amora@uorak.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, amora (não é amora? Sair)')
    })

})