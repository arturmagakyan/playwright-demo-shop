import { test, expect } from './fixtures';
import * as allure from 'allure-js-commons';

enum SortOption {
  A_TO_Z = 'az',
  Z_TO_A = 'za',
  LOW_TO_HIGH = 'lohi',
  HIGH_TO_LOW = 'hilo'
}

test.describe('Sorting Functionality', () => {
  
  test('User can sort products by price (Low to High)', async ({ loginPage, page }) => {

    await allure.epic('Catalog Management'); 
    await allure.feature('Sorting Functionality'); 
    await allure.story('Sort products by price (Low to High)'); 
    await allure.tags('ui', 'sorting'); 
    await allure.severity('normal'); 
    
    await loginPage.goto();
    await loginPage.login('standard_user', process.env.SAUCE_PASSWORD || 'secret_sauce');

    const sortDropdown = page.locator('.product_sort_container');

    await sortDropdown.selectOption(SortOption.LOW_TO_HIGH);

    await expect(sortDropdown).toHaveValue(SortOption.LOW_TO_HIGH);
    
    const priceElements = await page.locator('.inventory_item_price').allInnerTexts();
    
    const prices = priceElements.map(priceText => {return parseFloat(priceText.replace('$', '')); 
    });

    const firstPrice = prices[0];
    const lastPrice = prices[prices.length - 1];
    
    expect(firstPrice).toBeLessThanOrEqual(lastPrice);
  });
});