import { test } from './fixtures';
import { faker } from '@faker-js/faker'

test.describe('E2E Shopping Flow', () => {
  test('User can complete a purchase', async ({ loginPage, inventoryPage, cartPage, checkoutPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', process.env.SAUCE_PASSWORD || 'secret_sauce');

    await inventoryPage.addProductByName('Sauce Labs Backpack');
    await inventoryPage.goToCart();

    await cartPage.checkItemVisible('Sauce Labs Backpack');
    await cartPage.clickCheckout();
    
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const zipCode = faker.location.zipCode();

    await checkoutPage.fillDetails(firstName,lastName,zipCode);
    await checkoutPage.finishOrder();
    
    await checkoutPage.expectSuccessMessage();
  });
});