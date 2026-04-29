import {test, Page, chromium, Browser} from "@playwright/test"


test("fetch value in the text box test", async({page}) =>{ 
     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
     await page.getByRole('textbox', {name: 'First Name'}).fill('sam');
    let  firstName = await page.getByRole('textbox', {name: 'First Name'}).inputValue();
    console.log(firstName);


});