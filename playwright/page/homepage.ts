import { Page, expect } from "@playwright/test";

export class Homepage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyHomePage() {
        await expect(this.page.getByText('Swag Labs')).toBeVisible();
        await expect(this.page.getByText('Products')).toBeVisible();
    }
}