import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';

export class CheckoutPage {
  constructor(private page: Page) {}

 
  async addProductToCart(productId: string) {
    await this.page.locator(`#add-to-cart-${productId}`).click();
  }

  getCartCountElement() {
    return this.page.locator('.shopping_cart_link');
  }

  async clickCart() {
    await this.getCartCountElement().click();
  }

  getCheckoutButton() {
    return this.page.locator('#checkout');
  }

  async clickCheckout() {
    await this.getCheckoutButton().click();
  }

  async fillFirstName(firstName: string) {
    await this.page.locator('#first-name').fill(firstName);
  }

  async fillLastName(lastName: string) {
    await this.page.locator('#last-name').fill(lastName);
  }

  async fillPostalCode(postalCode: string) {
    await this.page.locator('#postal-code').fill(postalCode);
  }

  async clickContinue() {
    await this.page.locator('#continue').click();
  }

  async clickFinish() {
    await this.page.locator('#finish').click();
  }

  getSuccessMessage() {
    return this.page.locator('.complete-header');
  }
}
