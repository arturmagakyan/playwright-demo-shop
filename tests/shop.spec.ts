import { test } from './fixtures';

test.describe('E2E Shopping Flow', () => {
  test('User can complete a purchase', async ({ loginPage, inventoryPage, cartPage, checkoutPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', process.env.SAUCE_PASSWORD || 'secret_sauce');

    await inventoryPage.addProductByName('Sauce Labs Backpack');
    await inventoryPage.goToCart();

    await cartPage.checkItemVisible('Sauce Labs Backpack');
    await cartPage.clickCheckout();

    await checkoutPage.fillDetails('Artur', 'QA', '123456');
    await checkoutPage.finishOrder();
    
    await checkoutPage.expectSuccessMessage();
  });
});