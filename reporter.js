var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'test/reports/cucumber-report.json',
    output: 'test/reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "Build Version":"0.3.2",
        "Test Environment": "Local Hardhat Node",
    }
};
reporter.generate(options);