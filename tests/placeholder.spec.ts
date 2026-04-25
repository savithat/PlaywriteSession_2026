//
//enter character by character

import {test, Page, chromium, Browser} from "@playwright/test"


test("fill with delay test", async({page}) =>{ 
     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByPlaceholder('First Name').fill("savitha");
    await page.getByPlaceholder('Telephone').fill("12345");
    await page.getByPlaceholder('Password', {exact: true}).fill("Ram");
     await page.getByPlaceholder('Password Confirm').fill("Ram");
     await page.pause();
});