//locator practice

import { test, Page, chromium, Browser } from "@playwright/test"


test("radio and checkbox test", async ({ page }) => {
    //  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    // await page.getByRole('radio', {name: 'Yes'}).click();
    //  await page.getByRole('radio', {name: 'No'}).click();
    //  await page.getByRole('checkbox').click();
    // await page.waitForTimeout(2000);


    //Radio button
    await page.goto("https://testing.qaautomationlabs.com/checkbox.php");
    await page.getByRole('checkbox', { name: 'Check me!', exact: true }).click();
    await page.getByRole('checkbox', { name: 'Enable Checkbox 1' }).click();
    await page.getByRole('checkbox', { name: 'Checkbox 1', checked: false }).click();
    await page.locator("#multichk4").click();
    await page.waitForTimeout(2000);


    //check box
    await page.locator(" //ul[@role='menu']/li[normalize-space()='Radio Button']").click();
    //   await page.getByRole('radio', {name: 'Male', checked: false}).first().click();
    await page.locator("input[name='gender'][value='Female']").click();   // using css
    await page.getByText('Show Selected Gender', { exact: true }).click();

    await page.getByLabel('Radio Button 1', { exact: true }).click;
    //   await page.getByRole('radio', {name: 'Male'}).nth(2).click();
    await page.locator("input[name='gender1'][value='Male']").click();
    await page.waitForTimeout(4000);
    await page.pause();

});


test("text area test", async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/');
//   await page.getByPlaceholder('Search').fill('canon');
//   await page.locator('#search button').click();
await page.getByAltText('naveenopencart').click();
await page.getByText("Apple Cinema 30\"").click();

let address: string = `101 street
bangalore
india`;
await page.getByLabel('Checkbox 3 (+$36.00)').click();
await page.getByLabel('Text', {exact: true}).fill('hello');
await page.getByPlaceholder('Textarea').fill(address);
await page.locator("select[id^='input-option']").selectOption({ label: 'Blue (+$3.60)' });

await page.getByLabel('Date', {exact:true}).fill("2026-06-20");
//await page.getByRole('button', {name: 'Add to Cart'}).click();
 await page.locator("#button-cart").click();
await page.waitForTimeout(1000);
await page.pause();

});