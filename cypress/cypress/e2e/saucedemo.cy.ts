import { clickLoginButton, fillPassword, fillUsername, verifySauceDemoPage } from "../support/action-sauce-demo";

describe('Sauce Demo Scenario', () => {

    beforeEach(() => {  

        cy.visit('https://www.saucedemo.com/');

    });
    

    it('Case : Login Standard user success', () => {

        verifySauceDemoPage();
            
        fillUsername('standard_user');

        fillPassword('secret_sauce');

        clickLoginButton();

        //Expected
        
        cy.get('#header_container > div.header_secondary_container > span').should('have.text', 'Products');
        cy.get('.app_logo').should('have.text', 'Swag Labs')

    });

    it('Case : Login with Invalid user', () => {

        verifySauceDemoPage();
            
        fillUsername('invalid_user');

        fillPassword('secret_sauce');

        clickLoginButton();

        //Expected
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');

    });

    it('Case : Login with locked_out user', () => {

        cy.visit('https://www.saucedemo.com/');

        verifySauceDemoPage();
            
        fillUsername('locked_out_user');

        fillPassword('secret_sauce');

        clickLoginButton();

        //Expected
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');

    });


    it('Case : Click login button without username and password ', () => {

        verifySauceDemoPage();

        clickLoginButton();

        //Expected
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required');
        
    });
    
});