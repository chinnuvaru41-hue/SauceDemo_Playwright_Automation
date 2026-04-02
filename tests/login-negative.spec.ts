import { test, expect } from '@playwright/test';

import loginData from './test-data/login_data.json';
import { LoginPage } from '../pages/LoginPage';

test('Login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  
  // Invalid credentials
  await loginPage.enterUsername(loginData.INVALID_USERNAME);
  await loginPage.enterPassword(loginData.INVALID_PASSWORD);
  await loginPage.clickLogin();
  await expect(loginPage.getErrorMessage()).toBeVisible();
  await expect(loginPage.getErrorMessage()).toContainText('Username and password do not match');
});
