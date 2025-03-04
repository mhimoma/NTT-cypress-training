const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {  
    apiUrl: 'http://localhost:3001'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: "http://localhost:3000",
    viewportHeight: 550,
    viewportWidth: 660,
    experimentalStudio: true
  },
});
