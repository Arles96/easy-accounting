const { When } = require('cucumber');
let loginPage = require('../pages/loginPage')


 When(/^the user logs in$/, function () {
   loginPage.loginUser()
 })