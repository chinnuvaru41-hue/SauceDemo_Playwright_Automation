import { test, expect } from '@playwright/test';
test.describe('SauceDemo E2E Flow', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

test('Login → Add Products → Verify Cart → Checkout → Success', async ({ page }) => {

await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
const loginButton = page.locator('#login-button');
await expect(loginButton).toBeVisible();
await expect(loginButton).toBeEnabled();
await page.locator('#login-button').click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await expect(page.locator('text=Swag Labs')).toBeVisible();
await page.locator('#add-to-cart-sauce-labs-backpack').click();
await page.locator('#add-to-cart-sauce-labs-onesie').click();
const cart=page.locator('.shopping_cart_link');
await expect(cart).toHaveText('2');
await cart.click();

const checkoutbutton=page.locator('#checkout');
await expect(checkoutbutton).toBeVisible();
await checkoutbutton.click();

await page.locator('#first-name').fill('Manhitha');
await page.locator('#last-name').fill('V');
await page.locator('#postal-code').fill('517001');
await page.locator('#continue').click();
await page.locator('#finish').click();

const message=page.locator('.complete-header');
await expect(message).toHaveText('Thank you for your order!');











});

});