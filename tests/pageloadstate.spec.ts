import {test, Page, chromium, Browser} from "@playwright/test"


test("page load state test", async({page}) =>{ 
     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home', {waitUntil: 'load'});

     //load: all resources(image, elements, css, scripts) loaded --- default option
     //domcontentloaded: HTML DOM is parsed, DOM is ready
     //network idle: no network activity for 500 ms --good? 
     //commit: first  response byte is received from server

});