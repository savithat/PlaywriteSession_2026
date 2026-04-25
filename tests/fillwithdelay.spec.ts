//enter character by character

import {test, Page, chromium, Browser} from "@playwright/test"


test("fill with delay test", async({page}) =>{ 
     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByRole('textbox', {name: 'First Name'}).pressSequentially('naveen automation labs', {delay: 500});
});