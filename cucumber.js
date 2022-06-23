
module.exports = {
    default: {
        paths: ['test/features/*.feature'],
        require: ['test/step_definitions/*.ts'],
        requireModule: ['ts-node/register'],
        publishQuiet: true,
        format: ["json:test/reports/cucumber-report.json"],
    }
};


