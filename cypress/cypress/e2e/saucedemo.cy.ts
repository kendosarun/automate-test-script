import { clickLoginButton, fillPassword, fillUsername } from "../support/action-sauce-demo";

describe('Sauce Demo Scenario', () => {

    //params

    beforeEach(() => {
        //For Mock Intercept
    });
    

    it('Case : Login Standard user success', () => {
        
        cy.visit('https://www.saucedemo.com/')
            
        fillUsername('standard_user');

        fillPassword('secret_sauce');

        clickLoginButton();
    });
});