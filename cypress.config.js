require('dotenv').config();
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://allawi465.github.io/holidaze/',
    setupNodeEvents(on, config) {
      config.env = {
        ...process.env,
        ...config.env,
      };
      return config;
    },
  },
});
