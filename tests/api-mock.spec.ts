import { test, expect } from "@playwright/test";

interface Fruit{
    name: string;
    id: number;
}

test('API Mocking: Replace the server response', async ({ page }) => {
    
    const fakeFruits: Fruit[] = [
        { name: 'Cyber-Apple', id: 1 },
        { name: 'QA-Banana', id: 2 },
        { name: 'Bug-Watermelon', id: 3 }
    ];
    
    await page.route('*/**/api/v1/fruits', async (route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            json: fakeFruits
        });
    });
    await page.goto('https://demo.playwright.dev/api-mocking');
    await expect(page.getByText('Cyber-Apple')).toBeVisible();
    await expect (page.getByText('QA-Banana')).toBeVisible();

})