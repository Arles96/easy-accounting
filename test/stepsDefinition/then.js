const { Then } = require('cucumber');
let dashboardPage = require('../pages/dashboardPage')



Then(/^the student should see the dashboard$/, function () {
  browser.pause(1000)
  dashboardPage.loginAssertion()
})
