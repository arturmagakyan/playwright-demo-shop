import { type Locator, type Page, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.pageTitle = page.locator('.title');
  }

  async addProductByName(productName: string) {
    const productCard = this.page.locator('.inventory_item')
      .filter({ hasText: productName });

    await productCard.locator('button').click();
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async expectLoaded() {
    await expect(this.pageTitle).toHaveText('Products');
  }
}