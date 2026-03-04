import { type Locator, type Page } from "@playwright/test";

export class ProductDetailPage {
  readonly page: Page;
  readonly inventoryItemName: Locator;
  readonly addToCartButton: Locator;
  readonly backToProductsButton: Locator;

  constructor(page: Page)  {
   this.page = page;
   this.inventoryItemName = page.locator('.inventory_details_name');
   this.addToCartButton = page.locator('[data-test="add-to-cart"]');
   this.backToProductsButton = page.locator('[data-test="back-to-products"]');
  } 

  async addToCart(): Promise<void>{
    await this.addToCartButton.click();
  }
  async goBack(): Promise<void>{
   await this.backToProductsButton.click();
  }
}