import {test, Page, chromium, Browser} from "@playwright/test"


test("get attribute test", async({page}) =>{ 
     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let placeHolderVal  = await page.getByRole('textbox', {name: 'First Name'}).getAttribute('placeholder');
    console.log(placeHolderVal);

    let loginLinkVal  = await page.getByRole('link', {name: 'Login', exact: true}).getAttribute('href');
     console.log(loginLinkVal);



});