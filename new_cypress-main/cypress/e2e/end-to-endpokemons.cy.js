describe('end-to-end', function () {

     it('Верный пароль и верный логин', function () {
       cy.visit('https://pokemonbattle.ru/');
       cy.get(':nth-child(1) > .auth__input').type('kyrt7z@yandex.ru');
       cy.get('#password').type('Kyrtz1');
       cy.get('.auth__button').click();

       cy.wait(1500);

       cy.get('.header__container > .header__id').click();
      
       cy.get('[href="/shop"]').click();
       cy.get('.available > button').first().click({ force: true });
       cy.get('.credit').type('4620869113632996');
       cy.get('.k_input_ccv').type('125');
       cy.get('.k_input_date').type('1225');
       cy.get('.k_input_name').type('NAME');
       cy.get('.pay-btn').click();
       cy.get('#cardnumber').type('56456');
       cy.get('.payment__submit-button').click();

       cy.contains('Покупка прошла успешно').should('be.visible');
       
     })
})