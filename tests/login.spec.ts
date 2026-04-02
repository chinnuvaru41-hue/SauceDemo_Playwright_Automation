import { test, expect } from '@playwright/test';

import loginData from './test-data/login_data.json';
import { LoginPage } from '../pages/LoginPage';

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  
  // Valid credentials
  await loginPage.enterUsername(loginData.VALID_USERNAME);
  await loginPage.enterPassword(loginData.VALID_PASSWORD);
  await loginPage.clickLogin();
});