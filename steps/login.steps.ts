import { createBdd } from 'playwright-bdd';
import { test, expect } from './fixtures';

const { Given, When, Then } = createBdd(test);

Given('I am on the login page', async ({ loginPage }) => {
  await loginPage.goto();
});

When('I login with {string} and {string}', async ({ loginPage }, user: string, pass: string) => {
  await loginPage.login(user, pass);
});

Then('I should see the products page', async ({ page, inventoryPage }) => {
  await expect(page).toHaveURL(/inventory/);
  await expect(inventoryPage.title).toHaveText('Products');
});

Then('I should see the error {string}', async ({ loginPage }, text: string) => {
  await expect(loginPage.errorMessage).toContainText(text);
});