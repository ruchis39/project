var {Given, When,Then, After} = require ("cucumber");


const { browser, element} = require("protractor");

var {setDefaultTimeout} = require ('cucumber')

setDefaultTimeout(50 * 1000);


           Given('user open the ultimatix page', async function () {
           // Write code here that turns the phrase above into concrete actions
           await browser.driver.get ("https://www.ultimatix.net")

           browser.waitForAngularEnabled(false)

         });

  

         When("user enters {string} username", async function (string) {
           // Write code here that turns the phrase above into concrete actions

               let hookclass = this
              
              await element(by.xpath("//*[@id='form1']")).isPresent().then(function(present){
                
                if(present){

                  browser.findElement(by.xpath("//*[@id='form1']")).sendKeys(string)

                  console.log("user entered existing username!")
              
                  return hookclass.attach("username exists on ultimatix")}

                  else{

                    console.log("username doesnot exist")

                    return hookclass.attach("username doesnot exist")


                  }

                })

              })

                 // return browser.takeScreenshot()

             // .then(function(screenshot){
  
               // const decodedImg = new Buffer (screenshot.replace(/^data:image\/png;base64,/, ''), 'base64')
            
                //hookclass.attach(decodedImg,'image/png')

              
  
           When('user clicks on Proceed button', async function () {
           // Write code here that turns the phrase above into concrete actions

           let hook = this

           
              
               await element(by.xpath("//*[@id='proceed-button']")).click()

               console.log("user clicked on Proceed button")

                await browser.manage().timeouts().implicitlyWait(6000)
         });


         When('user clicks on Auth Code button', async function () {
           // Write code here that turns the phrase above into concrete actions


               await browser.findElement(by.xpath("//*[@id='auth-code-btn']")).click()
         });

         When('user clicks on Login button', async function () {
            // Write code here that turns the phrase above into concrete actions
                await browser.findElement(by.xpath("//*[@id='form-submit']")).click()
          });

  

         Then('user should log in successfully', async function () {
           // Write code here that turns the phrase above into concrete actions

             const title = await browser.driver.getTitle()
             console.log("user got logged in successfully! and the title is:" +  title)
         });

        