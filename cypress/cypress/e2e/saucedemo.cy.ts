import  homePage from '../support/action-sauce-demo';

describe('Sauce Demo Scenario', () => {

    const myHomePage = new homePage();

    beforeEach(() => {  

        cy.visit('https://www.saucedemo.com/');

    });
    

    it('Case : Login Standard user success', () => {

        myHomePage.verifySauceDemoPage();
            
        myHomePage.fillUsername('standard_user');

        myHomePage.fillPassword('secret_sauce');

        myHomePage.clickLoginButton();

        //Expected
        myHomePage.expectedResult(
        '#header_container > div.header_secondary_container > span', 
        'have.text', 
        'Products');

        myHomePage.expectedResult(
            '.app_logo',
            'have.text',
            'Swag Labs'
        );

    });

    it('Case : Login with Invalid user', () => {

        myHomePage.verifySauceDemoPage();
            
        myHomePage.fillUsername('invalid_user');

        myHomePage.fillPassword('secret_sauce');

        myHomePage.clickLoginButton();

        //Expected
        myHomePage.expectedResult(
            '[data-test="error"]',
            'have.text',
            'Epic sadface: Username and password do not match any user in this service'
        );

    });

    it('Case : Login with locked_out user', () => {

        cy.visit('https://www.saucedemo.com/');

        myHomePage.verifySauceDemoPage();
            
        myHomePage.fillUsername('locked_out_user');

        myHomePage.fillPassword('secret_sauce');

        myHomePage.clickLoginButton();

        //Expected
        myHomePage.expectedResult(
            '[data-test="error"]',
            'have.text',
            'Epic sadface: Sorry, this user has been locked out.'
        );

    });


    it('Case : Click login button without username and password ', () => {

        myHomePage.verifySauceDemoPage();

        myHomePage.clickLoginButton();

        //Expected
        myHomePage.expectedResult(
            '[data-test="error"]',
            'have.text',
            'Epic sadface: Username is required'
        );
        
    });
    
});