import { test, expect } from './fixtures';

test.describe('Fast E2E Shopping Flow (Global Auth)', () => {
  
  test('Purchase without login screen', async ({ page, inventoryPage }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');

    await inventoryPage.addProductByName('Sauce Labs Backpack');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

});