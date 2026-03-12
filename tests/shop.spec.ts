import { test } from './fixtures';
import { faker } from '@faker-js/faker';
import * as allure from 'allure-js-commons';

interface Customer {
  firstName: string;
  lastName: string;
  zipCode: string;
}

test.describe('E2E Shopping Flow', () => {
  test('User can complete a purchase', async ({ loginPage, inventoryPage, cartPage, checkoutPage }) => {

    await allure.epic('E-Commerce Core'); 
    await allure.feature('Checkout Process'); 
    await allure.story('Successful purchase with valid fake data'); 
    await allure.tags('e2e', 'critical_path'); 
    await allure.severity('blocker'); 

    await loginPage.goto();
    await loginPage.login('standard_user', process.env.SAUCE_PASSWORD || 'secret_sauce');

    await inventoryPage.addProductByName('Sauce Labs Backpack');
    await inventoryPage.goToCart();

    await cartPage.checkItemVisible('Sauce Labs Backpack');
    await cartPage.clickCheckout();
    
    const randomCustomer: Customer ={
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      zipCode: faker.location.zipCode()
    };

    await checkoutPage.fillDetails(
      randomCustomer.firstName,
      randomCustomer.lastName,
      randomCustomer.zipCode
    );
    
    await checkoutPage.finishOrder();
    await checkoutPage.expectSuccessMessage();
  });
});