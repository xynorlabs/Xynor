# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: basic.spec.js >> Xynor main site loads
- Location: tests\basic.spec.js:3:1

# Error details

```
Error: page.goto: Target page, context or browser has been closed
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Xynor main site loads', async ({ page }) => {
> 4  |   await page.goto('https://xynor.in/');
     |              ^ Error: page.goto: Target page, context or browser has been closed
  5  |   await expect(page).toHaveTitle(/xynor/i);
  6  | });
  7  | 
  8  | test('Talent site loads', async ({ page }) => {
  9  |   await page.goto('https://talent.xynor.in/');
  10 |   await expect(page).toHaveURL(/talent/);
  11 | });
```