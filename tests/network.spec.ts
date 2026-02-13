import { test, expect } from './fixtures';

test.describe('Network Mocking', () => {
  
  test('Mock API response for fruit list', async ({ page }) => {
    await page.route('*/**/api/v1/fruits', async route => {
      const json = [
        { name: 'Strawberry', id: 21 },
        { name: 'Pineapple', id: 22 },
        { name: 'Mango', id: 23 }
      ];
      await route.fulfill({ json });
    });

    await page.goto('https://demo.playwright.dev/api-mocking');

    await expect(page.getByText('Strawberry')).toBeVisible();
    await expect(page.getByText('Pineapple')).toBeVisible();
    await expect(page.getByText('Mango')).toBeVisible();
  });

  test('Abort requests to specific resources', async ({ page }) => {
    await page.route('**/*.{png,jpg,jpeg,svg}', route => route.abort());
    await page.goto('https://demo.playwright.dev/api-mocking');
  });
});