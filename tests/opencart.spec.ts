//
import test, {Browser, BrowserContext, chromium, Page} from "@playwright/test"

test.use({storageState : 'storageState.json'});

test('Open cart Home page test', async({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/account');
    await page.waitForTimeout(10000);
});


test('Open checkout cart page test', async({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart');
    await page.waitForTimeout(10000);
});