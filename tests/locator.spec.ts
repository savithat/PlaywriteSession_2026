//

import {test, Page, chromium, Browser} from "@playwright/test"
import { text } from "node:stream/consumers";

test("register page test", async({page}) =>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.getByRole('textbox', {name: 'First Name'}).fill("sanju");
    await page.getByRole('textbox', {name: 'Last Name'}).fill("Jags");
    await page.getByPlaceholder('E-Mail').fill('sanju@yahoo.com');
    await page.getByLabel('Telephone').fill('1234567');
    await page.locator("//*[@id = 'input-password']").fill('jags123');
    await page.locator("input[name='confirm']").fill('jags123');
    await page.getByRole('radio' , {name: 'No'});
    await page.getByRole('checkbox').click();

 //   await page.getByRole('button', {name: 'Continue'}).click();

    page.pause();
});