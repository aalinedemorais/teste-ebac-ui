class ProdutosPage {

    VisitarURL() {
        cy.visit('produtos')
    }
    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.product-block')
            .contains(nomeProduto)
            .click()
    }

    visitarProduto(nomeProduto) {
        // cy.visit(`produtos/${nomeProduto}`)
        const urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)
    }

    addProdutoCarrinho(tamanho, cor, quantidade) {
        // cy.get('.button-variable-item-M').click()
        // cy.get('.button-variable-item-Green').click()

        // para fazer com dados parametrizáveis juntando string+parâmetro, exemplificado abaixo duas formas de fazer a mesma coisa
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

}

export default new ProdutosPage()