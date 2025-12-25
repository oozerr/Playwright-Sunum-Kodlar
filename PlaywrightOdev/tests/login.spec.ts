import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Login Scenarios', () => {

    test.beforeEach(async ({ page }) => {
          const loginPagePath = path.resolve(__dirname, '../src/index.html');
        await page.goto(`file://${loginPagePath}`);
    });

    test('should login successfully with correct credentials', async ({ page }) => {
         await page.fill('#username', 'demo');
        await page.fill('#password', '1234');

        await page.click('#loginButton');

         await expect(page).toHaveURL(/dashboard.html/);

         await expect(page.locator('h1')).toHaveText('Welcome, User!');
        await expect(page.locator('.content p')).toContainText('This is a secure area');
    });

    test('should show error message with invalid credentials', async ({ page }) => {
        await page.fill('#username', 'wrong');
        await page.fill('#password', 'wrongpass');

        await page.click('#loginButton');

         const errorMsg = page.locator('#error-msg');
        await expect(errorMsg).toBeVisible();
        await expect(errorMsg).toHaveText('Invalid credentials!');

         await expect(page.locator('h2')).toHaveText('Login');
    });

    test('should logout successfully', async ({ page }) => {
         await page.fill('#username', 'demo');
        await page.fill('#password', '1234');
        await page.click('#loginButton');

        await expect(page).toHaveURL(/dashboard.html/);

        await page.click('#logoutBtn');

        await expect(page).toHaveURL(/index.html/);
        await expect(page.locator('h2')).toHaveText('Login');
    });
});
