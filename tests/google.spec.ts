//

import test, { Browser, firefox, Page } from "playwright/test";

test('google title test1 @smoke', async ({page}) =>{
  await page.goto('https://google.com');  //navigate to 
  let title:string = await page.title();
  console.log(title);
  let pageUrl:string = page.url();
  console.log(pageUrl);
  await page.waitForTimeout(5000);  //static timeout

})


test('google title test2 @regression', async ({page}) =>{
  await page.goto('https://google.com');  //navigate to 
  let title:string = await page.title();
  console.log(title);
  let pageUrl:string = page.url();
  console.log(pageUrl);
  await page.waitForTimeout(5000);  //static timeout

})



test('google title test', async ({page}) =>{
  await page.goto('https://google.com');  //navigate to 
  let title:string = await page.title();
  console.log(title);
  let pageUrl:string = page.url();
  console.log(pageUrl);
  await page.waitForTimeout(5000);  //static timeout

})