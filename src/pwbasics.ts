//IIFE(Immidiatly invoke function expression) function --- config file not applicable

import { Browser, chromium, firefox, Page, webkit } from "playwright/test";

(async () => {
//let browser: Browser =  await chromium.launch({channel : 'chromium', headless: false});  //CFT (Chrome for testing)
let browser: Browser =  await chromium.launch({channel : 'chrome', headless: false});
// let browser: Browser =  await chromium.launch({channel : 'msedge', headless: false});
//let browser: Browser =  await chromium.launch({channel : '', headless: false});  //opera
//let browser: Browser =  await chromium.launch({channel : '', headless: false});  //brave


//Firefox: nightly build
//let browser: Browser = await firefox.launch({channel : 'firefox', headless: false});

//webkit : 
//let browser: Browser = await webkit.launch({headless: false});

let page: Page  = await browser.newPage();
    await page.goto('https://google.com');
    let title: string = await page.title();
    console.log('title :', title);
    let url: string =   page.url();
    console.log('url: ', url);
     browser.close();

})();