//

import {test, Page, chromium, Browser} from "@playwright/test"


test("highlight element test", async({page}) =>{ 
     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByRole('textbox', {name: 'First Name'}).highlight();
    await page.pause();
});