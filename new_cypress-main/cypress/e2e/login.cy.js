describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();

       cy.get('#messageHeader').contains('Авторизация прошла успешно');
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })
   
    it('Проверка логики восстановления пароля', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
       cy.get('#forgotEmailButton').click();

       cy.get('#mailForgot').type('german@dolnikov111.ru');
       cy.get('#restoreEmailButton').click();

       cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })

    it('НЕверный пароль и верный логин', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio111');
       cy.get('#loginButton').click();

       cy.get('#messageHeader').contains('Такого логина или пароля нет');
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })
   
   it('Верный пароль и НЕверный логин', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

       cy.get('#mail').type('german@dolnikov111.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();

       cy.get('#messageHeader').contains('Такого логина или пароля нет');
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })

   it('Негативный кейс валидации', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

       cy.get('#mail').type('germandolnikov111.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();

       cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })

   it('Приведение к строчным буквам в логине', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

       cy.get('#mail').type('GerMan@Dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();

       cy.get('#messageHeader').contains('Авторизация прошла успешно');
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })
})