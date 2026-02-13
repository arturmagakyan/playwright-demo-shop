import { test, expect } from './fixtures';

const users = [
  {
    username: 'standard_user',
    expectedTitle: 'Products',
    name: 'Standard User'
  },
  {
    username: 'problem_user',
    expectedTitle: 'Products',
    name: 'Problem User'
  },
];

test.describe('Login Scenarios', () => {
  for (const user of users) {
    test(`Login successful for ${user.name}`, async ({ loginPage, inventoryPage }) => {
      await loginPage.goto();
      await loginPage.login(user.username, process.env.SAUCE_PASSWORD || 'secret_sauce');
      await expect(inventoryPage.pageTitle).toHaveText(user.expectedTitle);
    });
  }

  test('Login locked_out_user shows error', async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login('locked_out_user', process.env.SAUCE_PASSWORD || 'secret_sauce');
    await expect(page.locator('[data-test="error"]')).toContainText('Sorry, this user has been locked out.');
  });
});