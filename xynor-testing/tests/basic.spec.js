const { test, expect } = require('@playwright/test');

test('Xynor main site loads', async ({ page }) => {
  await page.goto('https://xynor.in/');
  await expect(page).toHaveTitle(/xynor/i);
});

test('Talent site loads', async ({ page }) => {
  await page.goto('https://talent.xynor.in/');
  await expect(page).toHaveURL(/talent/);
});