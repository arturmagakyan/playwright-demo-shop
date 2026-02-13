import { type Locator, type Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.inventory_item_name');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async checkItemVisible(itemName: string) {
    await expect(this.cartItems.filter({ hasText: itemName })).toBeVisible();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}