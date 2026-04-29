import { test, Page, chromium, Browser } from "@playwright/test"
import { link } from "node:fs";


test("back forward navigation test", async ({ page }) => {

    //1. got o home page
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
    console.log(await page.title());
    await page.waitForTimeout(2000);

    //click my account -> register page
    await page.getByRole('link', {name: 'My Account', exact:true}).click();
    await page.waitForTimeout(2000);
    console.log(await page.title());
    await page.getByRole('link', {name: 'Register', exact:true}).click()
    await page.waitForTimeout(2000);
    console.log(await page.title());;
    

    //geback()
    await page.goBack({waitUntil: 'load'});
    console.log(await page.title());
    await page.waitForTimeout(2000);

    //geback()
    await page.goBack({waitUntil: 'load'});
    console.log(await page.title());
    await page.waitForTimeout(2000);

    //goforward()
    await page.goForward({waitUntil: 'load'});
    console.log(await page.title());
    await page.waitForTimeout(2000);

    //reload
    await page.reload({waitUntil: 'load'});
    console.log(await page.title());
    await page.waitForTimeout(2000);

    await page.goto('https://google.com');
    console.log(await page.title());

});