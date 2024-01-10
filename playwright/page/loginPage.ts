import { Locator, Page, expect } from "@playwright/test";
import { User } from "../interface/user";
import { lockedOutUser, validUser } from "../fixture/dataUser";

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
    }

    async navigateLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async verifyLoginPage() {
        await expect(this.page).toHaveTitle(/Swag Labs/);
        await this.page.getByRole('button', {name: 'Login'}).isEnabled()
    }

    async clickLoginButton() {
        await this.page.getByRole('button', {name: 'Login'}).click();
    }

    async loginWithValidUser(user: User) {
        await this.username.fill(validUser.username);
        await this.password.fill(validUser.password);
    }

    async loginWithLockedOutUser(user: User) {
        await this.username.fill(lockedOutUser.username);
        await this.password.fill(lockedOutUser.password);
    }
}