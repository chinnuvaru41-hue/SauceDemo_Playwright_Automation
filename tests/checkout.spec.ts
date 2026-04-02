
import { test, expect } from '@playwright/test';
import loginData from './test-data/login_data.json';
import checkoutData from './test-data/checkout_data.json';
import { LoginPage } from '../pages/LoginPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout', () => {
  test('Checkout flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();
    await loginPage.enterUsername(loginData.VALID_USERNAME);
    await loginPage.enterPassword(loginData.VALID_PASSWORD);
    await loginPage.clickLogin();

    await checkoutPage.addProductToCart(checkoutData.PRODUCT_ID);
    const cartcount = checkoutPage.getCartCountElement();
    await expect(cartcount).toHaveText(checkoutData.EXPECTED_CART_COUNT.toString());
    await checkoutPage.clickCart();

    const checkoutbutton = checkoutPage.getCheckoutButton();
    await expect(checkoutbutton).toBeVisible();
    await checkoutPage.clickCheckout();

    await checkoutPage.fillFirstName(checkoutData.FIRST_NAME);
    await checkoutPage.fillLastName(checkoutData.LAST_NAME);
    await checkoutPage.fillPostalCode(checkoutData.POSTAL_CODE);
    await checkoutPage.clickContinue();
    await checkoutPage.clickFinish();

    const message = checkoutPage.getSuccessMessage();
    await expect(message).toHaveText(checkoutData.SUCCESS_MESSAGE);
  });
});
