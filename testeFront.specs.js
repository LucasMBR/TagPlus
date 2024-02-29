describe('Teste de Compra no Carrinho no site SauceDemo', () => {
    it('deve adicionar 2 itens ao carrinho e finalizar a compra', () => {
      cy.visit('https://www.saucedemo.com/');
  
      // Realiza login
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
  
      // Adiciona os dois primeiros itens ao carrinho
      cy.get('.btn_inventory').eq(0).click();
      cy.get('.btn_inventory').eq(1).click();
  
      // Vai para o carrinho
      cy.get('.shopping_cart_link').click();
  
      // Finaliza a compra
      cy.get('.checkout_button').click();

      // Preenche as informações
      cy.get('[data-test="firstName"]').type('Lucas');
      cy.get('[data-test="lastName"]').type('Teste');
      cy.get('[data-test="postalCode"]').type('12345');

      // Clica para continuar
      cy.get('[data-test="continue"]').click();
      
      // Clica em Finish
      cy.get('[data-test="finish"]').click();

      // Espera até que o elemento '.complete-header' seja visível na página
      cy.get('.complete-header', { timeout: 10000 }).should('exist');
  
      // Valida a mensagem "Thank you for your order!"
      cy.contains('.complete-header', 'Thank you for your order!');
    });
  });
  