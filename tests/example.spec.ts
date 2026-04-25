import { test, expect, chromium, Browser, Page, firefox } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('google test', async ({ page }) => {
 // let browser : Browser = await chromium.launch({channel: 'msedge', headless: false});  //open browser
 //let browser : Browser = await firefox.launch({headless: false});
 // let page : Page = await browser.newPage();   // create new page
  await page.goto('https://google.com');  //navigate to 
  let title:string = await page.title();
  console.log(title);
  let pageUrl:string = page.url();
  console.log(pageUrl);
  await page.waitForTimeout(5000); 

});