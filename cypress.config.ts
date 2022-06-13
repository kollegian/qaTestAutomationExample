const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");

module.exports = {
    e2e: {
    setupNodeEvents(on) {
      const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve("typescript"),

      };
      on("file:preprocessor", cucumber(options));
    },
    specPattern: "test/features/cypressExample.feature"
  },
};
