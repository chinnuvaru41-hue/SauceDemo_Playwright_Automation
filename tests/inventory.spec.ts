
import { test, expect } from '@playwright/test';
import inventoryData from './test-data/inventory_data.json';
import loginData from './test-data/login_data.json';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Inventory page tests', () => {
  let inventoryPage: InventoryPage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
    await loginPage.enterUsername(loginData.VALID_USERNAME);
    await loginPage.enterPassword(loginData.VALID_PASSWORD);
    await loginPage.clickLogin();
  });

  test('verify products are displayed', async () => {
    const productcount = await inventoryPage.getProducts();
    await expect(productcount).toHaveLength(inventoryData.EXPECTED_PRODUCT_COUNT);
  });

  test('Adding products to cart', async () => {
    for (const productId of inventoryData.PRODUCTS_TO_ADD) {
      await inventoryPage.addProductToCart(productId);
    }
    const cartcount = inventoryPage.getCartCountElement();
    await expect(cartcount).toHaveText(inventoryData.EXPECTED_CART_COUNT.toString());
    await inventoryPage.clickCart();
  });
});
