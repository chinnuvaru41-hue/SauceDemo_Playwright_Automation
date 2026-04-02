import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async getProducts() {
    return await this.page.locator('.inventory_item').all();
  }

  async addProductToCart(productId: string) {
    await this.page.locator(`#add-to-cart-${productId}`).click();
  }

  getCartCountElement() {
    return this.page.locator('.shopping_cart_link');
  }

  async clickCart() {
    await this.getCartCountElement().click();
  }
}
