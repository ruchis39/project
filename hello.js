"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
describe("Angular website", function () {
    it("Calculator", function () {
        protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        (0, protractor_1.element)(protractor_1.by.model("first")).sendKeys(4);
        protractor_1.browser.sleep(2000);
        (0, protractor_1.element)(protractor_1.by.model("second")).sendKeys(8);
        protractor_1.browser.sleep(2000);
        (0, protractor_1.element)(protractor_1.by.id("gobutton")).click();
        protractor_1.browser.sleep(5000);
    });
});
