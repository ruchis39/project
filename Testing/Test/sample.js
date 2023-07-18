const { browser } = require("protractor")

describe ( "Sample test case", function(){

    it ("Sample TC ", function(){

        browser.driver.get("https://www.ultimatix.net")

        browser.getTitle().then(function(title){

        console.log("Title:", title)
    })
})

})