var reporter = require('cucumber-html-reporter');

exports.config = {

    framework: 'custom',

    frameworkPath: require.resolve('protractor-cucumber-framework'),

    directConnect : true,

    capabilities: {

        "browserName" : 'chrome'
    },


    specs : ['../Features/UI/DCRfeature/09-DCRRTM_M1A Messages.feature'],

    cucumberOpts: {

        require: ["../Step_Definitions/DCR/DCR_steps.js"],
        format: 'json:cucumberreport.json'
        

    },

        onComplete: () => {

            console.log("oncomplete called")

            var options = {
                
                theme: 'bootstrap',
                jsonFile: './cucumberreport.json',
                output: 'Testing/Output/cucumber_report.html',
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version":"0.3.2",
                    "Test Environment": "STAGING",
                    "Browser": "Chrome  54.0.2840.98",
                    "Platform": "Windows 10",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };
        
            reporter.generate(options);
        },
    }



   
