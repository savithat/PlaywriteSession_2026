import {test, Page, chromium, Browser} from "@playwright/test"


test("data-testid test", async({page}) =>{ 
  /**    await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');
     //data-testid -- exacttly this attribute should be there
    await page.getByTestId('email-input').fill("sam");

**/

//set the attribute in "use" section in playwright.config.ts "testIdAttribute: 'data-test-id'"
//hubspot: has data-test-id in the dom --- but playwright support data-testid attribute
await page.goto("https://app.hubspot.com/signup-hubspot/crm?step=landing_page");
await page.getByTestId("EMAIL").fill('sam');
    
     await page.pause();
});