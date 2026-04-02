import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/');
  }

  async enterUsername(username: string) {
    await this.page.locator('#user-name').fill(username);
  }

  async enterPassword(password: string) {
    await this.page.locator('#password').fill(password);
  }

  getLoginButton() {
    return this.page.locator('#login-button');
  }

  async clickLogin() {
    await this.page.locator('#login-button').click();
  }

  getErrorMessage() {
    return this.page.locator('[data-test="error"]');
  }
}
