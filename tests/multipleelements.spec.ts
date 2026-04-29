import {test, Page, chromium, Browser, Locator} from "@playwright/test"


test("Total links on the page", async({page}) =>{ 
     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');  
     //links : <a>
      //images : <img>
    let allLinks: Locator[] = await page.locator('a').all();  // css = 'a[href]'. xml = '//a[@href]'
    let totLinks = allLinks.length;
    console.log(totLinks);

    for(let e of allLinks){
        let text = await e.innerText();
        let hrefVal = await e.getAttribute('href');
        console.log(text ,":" , hrefVal);
    }

});

test("navigate to Transactions link", async({page}) =>{ 
     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');  
     //links : <a>
      //images : <img>
    let allLinks: Locator[] = await page.locator('a.list-group-item').all();  // css = 'a[href]'. xml = '//a[@href]'
    let totLinks = allLinks.length;
    console.log(totLinks);
    
    //99% of the time you want allInnerTexts(), because it matches what the user sees. -- remove white space, Hidden element, User‑visible text
    //allTextContents() only if you need raw DOM text. --- white space preserved, included hidden elements, User‑visible text in not guanranteed
   const strs: string[] =  await page.locator('a.list-group-item').allInnerTexts();
   // const strs: string[] =  await page.locator('a.list-group-item').allTextContents();
   console.log("******",strs);

    for(let e of allLinks){
        
        await e.highlight();
        let linkText = (await e.innerText()).trim();
        console.log(linkText);
        await page.waitForTimeout(2000);
        if(linkText === 'Transactions'){
            await e.click();
            break;
        }
       
    }

    page.pause();
});



test("Total links ", async({page}) =>{ 
     await page.goto('https://google.com'); 
     console.log(await page.title()); 
     //links : <a> -- count
    let total = await page.locator('a').count();  // css = 'a[href]'. xml = '//a[@href]'
    console.log(total);
});






test("Total images on the page from flipcart",  async({page}) =>{ 
 //images.  //https://www.flipkart.com/. 
     await page.goto('https://www.flipkart.com/');
    let allImages: Locator[] = await page.locator('img').all();  // css = 'a[href]'. xml = '//a[@href]'
    let totImages = allImages.length;
    console.log(totImages);

    for(let e of allImages){
        let altText = await e.getAttribute('alt');
        let srcVal = await e.getAttribute('src');
        console.log(altText ,":" , srcVal);
    }

});