import test from "@playwright/test";
import { LoginPage } from "../page/loginPage";
import { validUser } from "../fixture/dataUser";
import { Homepage } from "../page/homepage";

test.describe('Test Scenario Saucedemo', async () => {
    
    test.beforeEach(async ({page}) => {

        const playwright = new LoginPage(page);
        

        await playwright.navigateLoginPage();
    });

    test('Login with valid user',async ({page}) => {
        const playwright = new LoginPage(page);
        const assertHomepage = new Homepage(page);

        await playwright.verifyLoginPage();
        await playwright.loginWithValidUser(validUser);
        await playwright.clickLoginButton();
        await assertHomepage.verifyHomePage();
    });
});