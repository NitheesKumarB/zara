const {Given,When,Then} = require('@cucumber/cucumber');
// const{expect}  = require('chai');
const {chromium} = require('playwright');
const LoginPage = require('../pages/LoginPage');


let browser;
let page;
let loginPage;



         Given('I launch the Facebook application',async function () {
           // Write code here that turns the phrase above into concrete actions
        //    return 'pending';
           browser = await chromium.launch({headless:false});
           page = await browser.newPage()
           loginPage = new LoginPage(page);
           await loginPage.navigateToLogin();
         });

   

         When('I enter the valid credentials',async function () {
           // Write code here that turns the phrase above into concrete actions
        //    return 'pending';
        await loginPage.enterUser("nithees");
        await loginPage.enterPass("12323");
         });

  

         Then('I click the login button',async function () {
           // Write code here that turns the phrase above into concrete actions
        //    return 'pending';
        await loginPage.loginClick();
         });