const { Given } = require('cucumber');


Given(/^a user that go to UMUC portal$/, function () {
  browser.pause(1000);
  browser.url("https://auv-stpweb-d01.us.umuc.edu/DU-ENV-1/apps/umuc-apps/app/digital-university");
  browser.pause(1000);

})

 