//
import {Browser, BrowserContext, chromium, Page} from "@playwright/test"
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

( async () => {
   let browser : Browser =  await chromium.launch({channel: 'chrome', headless: false});
   let page: Page = await browser.newPage();
   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
   await page.getByRole('textbox', {name : 'E-Mail Address'}).fill('savi@opencart.com');
    await page.getByRole('textbox', {name : 'Password'}).fill('savi@12345');
    await page.getByRole('button', {name : 'Login'}).click();
    await page.waitForSelector("img[title='naveenopencart']");
   // console.log("CWD =", process.cwd());

    await page.context().storageState({ path: path.resolve(__dirname, '../storageState.json') });
    await page.close();
})();