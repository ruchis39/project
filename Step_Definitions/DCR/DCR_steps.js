var { Given, When, Then, After } = require("cucumber");
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60*1000);
const DCR_page1 = require("../page")

const { browser, element } = require("protractor");

let EC = browser.ExpectedConditions



let page_obj = new DCR_page1.DCRpage




/*Given('user Open the facebook page', async function () {
  // Write code here that turns the phrase above into concrete actions
  await browser.driver.get("https://facebook.com")

  browser.waitForAngularEnabled(false)

});



When(/^user enters "([^"]*)" email address$/, async function (string) {
  // Write code here that turns the phrase above into concrete actions

  let hook = this;

  page_obj.email.isPresent().then(async function (result) {

    if (result) {

      console.log(`Promise Present is ${result}`)


      await page_obj.email.sendKeys(string)

      console.log("user entered email address")

      await hook.attach("user entered email address")
    }

  })

})

















// return browser.takeScreenshot()

// .then(function(screenshot){

// const decodedImg = new Buffer (screenshot.replace(/^data:image\/png;base64,/, ''), 'base64')

//hookclass.attach(decodedImg,'image/png')






When(/^user enters "([^"]*)" password$/, async function (string) {
  // Write code here that turns the phrase above into concrete actions

  let hook = this;

  //console.log("wait1")

  return browser.wait(EC.visibilityOf(element(by.name("pass"))), 10000).then(async function () {

    console.log("wait 1")



    element(by.name("pass")).sendKeys(string)

    console.log("user entered visible password!")

    //hook.attach("user entered new password on facebook")

  });

});


//});


When('click on Login', async function () {
  // Write code here that turns the phrase above into concrete actions

  let hook = this

  //console.log("wait 3")

  //EC returns function

  let visible = EC.visibilityOf(element(by.name("login")))

  console.log(`The result of visible is : ${visible}`)

  //Promise is returned

  let y = browser.wait(visible, 5000)

  console.log(`The result of visible wait is: ${y}`)


  //.then(async function(demo){

  //console.log(`what a demo: ${demo}`)

  // returns function

  let clickable = EC.elementToBeClickable(element(by.name("login")))

  console.log(` Clickable value is ${clickable}`)


  //returns Managed Promise

  let x = browser.wait(clickable, 5000)






  console.log(`The resolved Promise new value is: ${x}`)

  return x.then(async function (hello) {

    console.log(`demo worked : ${hello}`)


  })


})








// element(by.name("login")).click()

//console.log("Login btn clicked");

//hook.attach("Login btn clicked");



Then('user should log in successfully', async function () {
  // Write code here that turns the phrase above into concrete actions

  const title = await browser.driver.getTitle()
  console.log("user got logged in successfully! and the title is:" + title)
});*/

Given(/^user open the calculator site$/, async function () {

  await browser.get("https://juliemr.github.io/protractor-demo/");
});

When(/^user add 2 numbers "([^"]*)" and "([^"]*)"$/, async function (a,b) {

  //browser.sleep(2000);

  let hookclass = this;

  return page_obj.firsteditbox.isPresent().then(async function (result) {

    if (result) {

     

      page_obj.firsteditbox.sendKeys(a)

      console.log("Value entered in first edit box")

      hookclass.attach("Value entered in first edit box")
    }

    browser.sleep(3000)

    return page_obj.secondeditbox.isPresent().then(async function(value){

      if(value){

        page_obj.secondeditbox.sendKeys(b)

        console.log("Value entered in second edit box")
  
        hookclass.attach("Value entered in second edit box")

        browser.sleep(3000);
  
  
      }


    

  })

})

})


/*Then(/^the output displayed should be "([^"]*)" $/, async function(){


})*/