import { test, expect } from '@playwright/test';

test.describe('Saucedemo web testing', () => {

test('Standard user flow', async ({page}) => {
    await page.goto('https://saucedemo.com');

// Expect title contains "Swag Labs"
    await expect(page).toHaveTitle(/Swag Labs/);


// input valid data user

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();
// navigate to URL path contains text : inventory 
    await expect(page).toHaveURL(/inventory/)

// select all filter section

    await page.locator('[data-test="product_sort_container"]').selectOption({value:"za"})
    await page.locator('[data-test="product_sort_container"]').selectOption({value:"az"})
    await page.locator('[data-test="product_sort_container"]').selectOption({value:"lohi"})
    await page.locator('[data-test="product_sort_container"]').selectOption({value:"hilo"})

// Select Partial product add to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
// click to cart
    await page.locator('#shopping_cart_container a').click();

// navigate to URL path contains text : inventory 
    await expect(page).toHaveURL(/cart/)

// verify product choose

    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();
    await expect(page.getByText('Sauce Labs Fleece Jacket')).toBeVisible();
    await expect(page.getByText('Test.allTheThings() T-Shirt (Red)')).toBeVisible();

// Remove partial product
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
    

// navigate to Checkout page
    await page.locator('[data-test="checkout"]').click();

/// Check out page ////

// verify page from  URL path and contain text
    await expect(page).toHaveURL(/checkout-step-one/)
    await expect(page.getByText('Checkout: Your Information')).toBeVisible();

// check error message on information page
    await page.getByRole('button', {name: 'Continue'}).click();

// error message field -> first name

    await expect(page.getByText('Error: First Name is required')).toBeVisible();

    await page.getByPlaceholder('First Name').fill(' ');

    await page.getByRole('button', {name: 'Continue'}).click();

// error message field -> last name

    await expect(page.getByText('Error: Last Name is required')).toBeVisible();

    await page.getByPlaceholder('Last Name').fill(' ');

    await page.getByRole('button', {name: 'Continue'}).click();

// error message field -> Zip/Postal code

    await expect(page.getByText('Error: Postal Code is required')).toBeVisible();

    await page.getByPlaceholder('Zip/Postal Code').fill(' ');


//  input information user

    await page.getByPlaceholder('First Name').fill('John');
    await page.getByPlaceholder('Last Name').fill('Cena');
    await page.getByPlaceholder('Zip/Postal Code').fill('12345678901234567890');

    await page.getByRole('button', {name: 'Continue'}).click();

// verify Checkout Overview page
// URL assert
    await expect(page).toHaveURL(/checkout-step-two/)

// Title assert
    await expect(page.getByText('Checkout: Overview')).toBeVisible();


// Click Finish 
    await page.getByRole('button', {name: 'Finish'}).click();



// Complete page
    await expect(page).toHaveURL(/complete/)

    await expect(page.getByText('Thank you for your order!')).toBeVisible();

});
    

test('invalid user1', async ({page}) => {
        await page.goto('https://saucedemo.com');

     // Expect title contains "Swag Labs"
        await expect(page).toHaveTitle(/Swag Labs/);

        
    // input invalid data user 1

        await page.getByPlaceholder('Username').fill('standard_user123');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', {name: 'Login'}).click();

    // login error message should be show 

        await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
    
    });


    test('Standard user click All items menu', async ({page}) => {
        await page.goto('https://saucedemo.com');
    
    // Expect title contains "Swag Labs"
        await expect(page).toHaveTitle(/Swag Labs/);
    
    
    // input valid data user
    
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', {name: 'Login'}).click();
    // navigate to URL path contains text : inventory 
        await expect(page).toHaveURL(/inventory/)

    // Click hamburger menu on sidebar
        await page.getByRole('button', { name: 'Open Menu' }).click();

        await page.getByRole('link', { name: 'All Items' }).click();
    });



    test('Standard user click About menu', async ({page}) => {
        await page.goto('https://saucedemo.com');
    
    // Expect title contains "Swag Labs"
        await expect(page).toHaveTitle(/Swag Labs/);
    
    
    // input valid data user
    
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', {name: 'Login'}).click();
    // navigate to URL path contains text : inventory 
        await expect(page).toHaveURL(/inventory/)

    // Click hamburger menu on sidebar
        await page.getByRole('button', { name: 'Open Menu' }).click();

        await page.getByRole('link', { name: 'About' }).click();
    });


    test('Standard user click logout menu', async ({page}) => {
        await page.goto('https://saucedemo.com');
    
    // Expect title contains "Swag Labs"
        await expect(page).toHaveTitle(/Swag Labs/);
    
    
    // input valid data user
    
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', {name: 'Login'}).click();
    // navigate to URL path contains text : inventory 
        await expect(page).toHaveURL(/inventory/)

    // Click hamburger menu on sidebar
        await page.getByRole('button', { name: 'Open Menu' }).click();

        await page.getByRole('link', { name: 'Logout' }).click()
    });



    test('Standard user click Reset App State menu', async ({page}) => {
        await page.goto('https://saucedemo.com');
    
    // Expect title contains "Swag Labs"
        await expect(page).toHaveTitle(/Swag Labs/);
    
    
    // input valid data user
    
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', {name: 'Login'}).click();
    // navigate to URL path contains text : inventory 
        await expect(page).toHaveURL(/inventory/)

    // Click hamburger menu on sidebar
        await page.getByRole('button', { name: 'Open Menu' }).click();

        await page.getByRole('link', { name: 'Reset App State' }).click()
    });


});
