const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../../pages/pages/LoginPage');

Given(/^User is located on the main page of saucedemo website$/, async () => {
  await loginPage.open();
});

When(/^User click Login button$/, async () => {
  await loginPage.clickLoginButton();
});

Then(/^User should see Epic sadface: Username is required error message$/, async () => {
  await loginPage.getErrorText('Epic sadface: Username is required');
});
