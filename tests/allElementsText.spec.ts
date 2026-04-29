import {test, Page, chromium, Browser, Locator} from "@playwright/test"


test("Total links text page", async({page}) =>{ 
     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register'); 

     //99% of the time you want allInnerTexts(), because it matches what the user sees. -- remove white space, Hidden element, User‑visible text
    //allTextContents() only if you need raw DOM text. --- white space preserved, included hidden elements, User‑visible text in not guanranteed
    
     let allLinks: string[] = await page.locator('a').allInnerTexts(); 
   //  let allLinks: string[] = await page.locator('a').allTextContents(); 

     for(let e of allLinks){
        console.log(e);
     }

});

