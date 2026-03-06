import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const userCredentials = [
   {
    testName: 'Successful login',
    userName: 'standard_user',
    expectedUrl: /inventory.html/
   },
   {
    testName: 'Locked out user gets error',
    userName: 'locked_out_user',
    expectedError: 'Sorry, this user has been locked out.'
   },
   {
    testName: 'Problem user logs in but has UI issues',
    userName: 'problem_user',
    expectedUrl: /inventory.html/
   }
];

test.describe('Data-Driven Login Scenarios', () => {

    for (const data of userCredentials){

        test(`Login attempt: ${data.testName}`, async ({ page }) => {

            const loginPage = new LoginPage(page);

            await loginPage.goto();
            await loginPage.login(data.userName, process.env.SAUCE_PASSWORD || 'secret_sauce');

            if (data.expectedError) {
                await expect(loginPage.errorContainer).toBeVisible();
                await expect(loginPage.errorContainer).toContainText(data.expectedError);
            }
            else if (data.expectedUrl){
                await expect(page).toHaveURL(data.expectedUrl);
                await expect(page.getByText('Products')).toBeVisible();
            }


        });
    }
});