import {test, Page, chromium, Browser} from "@playwright/test"


test("altText for image test", async({page}) =>{ 
     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByAltText('naveenopencart').highlight();
    await page.waitForTimeout(1000);
    await page.getByAltText('naveenopencart').click();

    //DOM: accessibilty (browser)image 
    //playwright: getByRole -- internally using img-- page.getByRole('img')
    
     await page.pause();
});