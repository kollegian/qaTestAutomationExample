# Advanced Sample Hardhat Project

This project demonstrates an advanced Hardhat use case for testing purposes. The stack used here is;
- Cucumber as test framework
- Local Hardhat Node as test environment
- Typescript as prog language
- Cypress for UI testing - please note that I haven't been able to config properly to run it under features files.
- For API Testing couldn't find a good source.  

The test cases are written under /test/features as feature files with Gherkin Language with BDD style. 
The scripts can be found under /test/step_definitions folder. 

```shell
cucumber-js && node reporter.js
