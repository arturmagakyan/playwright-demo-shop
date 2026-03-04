import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const authFile = 'playwright/.auth/user.json';

setup('Authenticate and save state', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', process.env.SAUCE_PASSWORD || 'secret_sauce');

  await expect(page.locator('.title')).toHaveText('Products');
  
  await page.context().storageState({ path: authFile });
});