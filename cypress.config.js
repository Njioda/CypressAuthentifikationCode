const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // config for test reporter
    },
    baseUrl: "https://demoblaze.com/",
    excludeSpecPattern: ["**/1-getting-started", "**/2-advanced-examples"],
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: "mocha-junit-reporter",
    reporterOptions: {
      mochaFile: "cypress/results/results-[hash].xml",
      toConsole: true
    }
  }
});
