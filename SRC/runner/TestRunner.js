const {setDefaultTimeout,setWorldConstructor} = require('@cucumber/cucumber');
const {chromium} = require('playwright');

setDefaultTimeout(10000);

setWorldConstructor(function (){
    this.browser = null;
    this.page = null;
    this.loginPage = null;
});