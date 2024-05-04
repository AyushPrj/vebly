const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  supportFile: 'test/support/e2e',
  fixturesFolder: 'test/fixtures',
});
