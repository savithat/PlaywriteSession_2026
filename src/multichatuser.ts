//

import {Browser, BrowserContext, chromium, Page} from "@playwright/test"

(async() =>{
    let browser: Browser = await chromium.launch({channel: 'chrome', headless: false});
    
    let context1: BrowserContext = await browser.newContext();
    let context2: BrowserContext = await browser.newContext();

    let page1 : Page = await context1.newPage();
    let page2 : Page = await context2.newPage();

    await page1.goto('http://localhost:3000');  //Savitha
    await page2.goto('http://localhost:3000'); //Sanju

    
    await page1.locator('#usernameInput').fill('Eam');
    await page1.getByRole('button', { name: 'Join Chat' }).click();

    await page2.locator('#usernameInput').fill('Fam');
    await page2.locator('#joinBtn').click();

    //send message from 
    await page1.locator('#messageInput').fill('Hello');
    await page1.locator('#sendBtn').click();

    await page2.locator('#messageInput').fill('Hi');
    await page2.locator('#sendBtn').click();

    //2nd message
    await page1.locator('#messageInput').fill('how are u doing?');
    await page1.locator('#sendBtn').click();

    await page2.locator('#messageInput').fill('doing good');
    await page2.locator('#sendBtn').click();


    //3rd message
    await page1.locator('#messageInput').fill('any work?');
    await page1.locator('#sendBtn').click();

    await page2.locator('#messageInput').fill('yes');
    await page2.locator('#sendBtn').click();


})();