const { browser } = require("protractor")

describe ("Sample Test Case", ()=>{

    it ("Sample TC", async () => {

        console.log("init")

        await browser.driver.get("https://angular.io/eventsmmm")

        console.log("heya!")

        const title = await browser.getTitle()

           console.log("Title:", title)


       // await expect (title).toEqual('Angular - EVENTS')

       console.log("hello ruchi!")



    })
})